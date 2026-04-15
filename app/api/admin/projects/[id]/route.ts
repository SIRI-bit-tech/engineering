import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        category: true,
        createdBy: {
          select: { name: true, email: true }
        }
      }
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      slug,
      categoryId,
      location,
      status,
      startDate,
      completionDate,
      description,
      challenge,
      solution,
      results,
      coverImage,
      additionalImages,
      stats,
      technicalAnalysis,
      implementationTimeline,
      keyTechnologies,
      environmentalImpact,
      published
    } = body;

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id }
    });

    if (!existingProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // If slug is being changed, check if new slug already exists
    if (slug && slug !== existingProject.slug) {
      const slugExists = await prisma.project.findUnique({
        where: { slug }
      });

      if (slugExists) {
        return NextResponse.json(
          { error: "A project with this slug already exists" },
          { status: 400 }
        );
      }
    }

    const project = await prisma.project.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(categoryId && { categoryId }),
        ...(location && { location }),
        ...(status && { status }),
        ...(startDate !== undefined && { startDate: startDate ? new Date(startDate) : null }),
        ...(completionDate !== undefined && { completionDate: completionDate ? new Date(completionDate) : null }),
        ...(description && { description }),
        ...(challenge && { challenge }),
        ...(solution && { solution }),
        ...(results && { results }),
        ...(coverImage && { coverImage }),
        ...(additionalImages && { additionalImages }),
        ...(stats && { stats }),
        ...(technicalAnalysis && { technicalAnalysis }),
        ...(implementationTimeline && { implementationTimeline }),
        ...(keyTechnologies && { keyTechnologies }),
        ...(environmentalImpact && { environmentalImpact }),
        ...(published !== undefined && { published })
      },
      include: {
        category: true
      }
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const project = await prisma.project.findUnique({
      where: { id }
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    await prisma.project.delete({
      where: { id }
    });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
