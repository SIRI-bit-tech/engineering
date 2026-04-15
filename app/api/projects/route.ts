import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";

// Public API endpoint for fetching projects (merged database + static)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number.parseInt(searchParams.get("limit") || "20");
    const category = searchParams.get("category");
    const latest = searchParams.get("latest") === "true";

    // 1. Fetch database projects
    const dbProjects = await prisma.project.findMany({
      where: {
        published: true,
        ...(category && { category: { slug: category } })
      },
      orderBy: { createdAt: "desc" },
      include: {
        category: true
      }
    });

    const transformedDbProjects = dbProjects.map((project: any) => ({
      ...project,
      mainImage: project.coverImage // Alias for compatibility
    }));

    // 2. Prepare and transform static projects
    interface StaticProject {
      slug: string;
      category?: string | { name: string; slug: string };
      coverImage?: string;
      mainImage?: string;
      [key: string]: unknown;
    }

    let filteredStaticProjects = (STATIC_PROJECTS as unknown as StaticProject[]).map(p => ({
      ...p,
      // Ensure coverImage exists for the grid
      coverImage: p.coverImage || p.mainImage,
      // Ensure category is an object
      category: typeof p.category === 'string'
        ? { name: p.category, slug: p.category.toLowerCase().trim().replaceAll(/\s+/g, '-') }
        : p.category
    }));

    if (category) {
      filteredStaticProjects = filteredStaticProjects.filter(
        p => p.category?.slug === category || p.category?.name?.toLowerCase() === category.toLowerCase()
      );
    }

    // 3. Combine
    // We place database projects first so "new" admin-created projects show up at the top
    const combinedProjects = [...transformedDbProjects, ...filteredStaticProjects];

    // 4. Apply limit
    const finalProjects = combinedProjects.slice(0, latest ? 3 : limit);

    return NextResponse.json(finalProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
