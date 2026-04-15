import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";

// Public API endpoint for fetching a single published project by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    // 1. Try to find in database
    const dbProject = await prisma.project.findUnique({
      where: {
        slug: slug,
        published: true
      },
      include: {
        category: true
      }
    });

    if (dbProject) {
      // Transform to add mainImage alias for compatibility
      const transformedProject = {
        ...dbProject,
        mainImage: dbProject.coverImage 
      };
      return NextResponse.json(transformedProject);
    }

    // 2. Fallback to static projects
    interface StaticProject {
      slug: string;
      category?: string | { name: string; slug: string };
      coverImage?: string;
      mainImage?: string;
      [key: string]: unknown; // Allow other properties from the original object
    }

    const rawStaticProject = STATIC_PROJECTS.find(p => p.slug === slug) as StaticProject | undefined;

    if (rawStaticProject) {
      // Transform static project to match expected format
      const staticProject = {
        ...rawStaticProject,
        coverImage: rawStaticProject.coverImage || rawStaticProject.mainImage,
        category: typeof rawStaticProject.category === 'string'
          ? { name: rawStaticProject.category, slug: rawStaticProject.category.toLowerCase().trim().replaceAll(/\s+/g, '-') }
          : rawStaticProject.category
      };
      return NextResponse.json(staticProject);
    }

    // 3. Not found in either
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
