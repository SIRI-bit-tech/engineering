import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          category: true,
          createdBy: {
            select: { name: true, email: true }
          }
        }
      }),
      prisma.project.count()
    ]);

    return NextResponse.json({
      projects,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
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

    // Validate required fields
    if (!title || !slug || !categoryId || !location || !coverImage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingProject = await prisma.project.findUnique({
      where: { slug }
    });

    if (existingProject) {
      return NextResponse.json(
        { error: "A project with this slug already exists" },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        categoryId,
        location,
        status: status || "ongoing",
        startDate: startDate ? new Date(startDate) : null,
        completionDate: completionDate ? new Date(completionDate) : null,
        description,
        challenge,
        solution,
        results: results || [],
        coverImage,
        additionalImages: additionalImages || [],
        stats: stats || {},
        technicalAnalysis: technicalAnalysis || [],
        implementationTimeline: implementationTimeline || [],
        keyTechnologies: keyTechnologies || [],
        environmentalImpact: environmentalImpact || [],
        published: published || false,
        userId: session.user.id
      },
      include: {
        category: true
      }
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
