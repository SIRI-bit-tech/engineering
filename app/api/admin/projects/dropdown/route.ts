import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";

export async function GET(request: NextRequest) {
  try {
    // 1. Fetch all database projects (includes admin-created projects)
    let dbProjects: any[] = [];
    try {
      dbProjects = await prisma.project.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          status: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (e) {
      console.warn("Could not fetch database projects for dropdown:", e);
    }

    // 2. Map static projects from constants
    const formattedStaticProjects = (STATIC_PROJECTS as any[]).map((p) => ({
      id: p.id || p.slug,
      slug: p.slug || p.id,
      title: p.title,
      status: p.status || (p.completionDate ? "completed" : "ongoing"),
    }));

    // 3. Deduplicate (database projects take priority over static projects with matching IDs or Slugs)
    const dbIdentifiers = new Set([
      ...dbProjects.map((p) => p.id),
      ...dbProjects.map((p) => p.slug).filter(Boolean),
    ]);

    const uniqueStaticProjects = formattedStaticProjects.filter(
      (p) => !dbIdentifiers.has(p.id) && !dbIdentifiers.has(p.slug)
    );

    // Merge: Database projects (admin-created ones first) followed by static projects
    const allProjects = [...dbProjects, ...uniqueStaticProjects];

    return NextResponse.json(allProjects);
  } catch (error) {
    console.error("Error fetching projects dropdown:", error);
    return NextResponse.json([], { status: 200 });
  }
}
