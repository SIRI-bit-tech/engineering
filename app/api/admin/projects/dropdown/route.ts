import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Fetch database projects
    let dbProjects: any[] = [];
    try {
      dbProjects = await prisma.project.findMany({
        select: {
          id: true,
          title: true,
          status: true,
        },
        orderBy: {
          title: "asc",
        },
      });
    } catch (e) {
      console.warn("Could not fetch database projects, falling back to static projects list:", e);
    }

    // 2. Map static projects from constants
    const formattedStaticProjects = (STATIC_PROJECTS as any[]).map((p) => ({
      id: p.id || p.slug,
      title: p.title,
      status: p.status || (p.completionDate ? "completed" : "ongoing"),
    }));

    // 3. Deduplicate (database projects take priority over static projects with matching IDs)
    const dbProjectIds = new Set(dbProjects.map((p) => p.id));
    const uniqueStaticProjects = formattedStaticProjects.filter(
      (p) => !dbProjectIds.has(p.id)
    );

    const allProjects = [...dbProjects, ...uniqueStaticProjects].sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return NextResponse.json(allProjects);
  } catch (error) {
    console.error("Error fetching projects dropdown:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
