import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma, withPrismaRetry } from "@/lib/prisma";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";

async function generateShortUserId(): Promise<string> {
  for (let i = 0; i < 10; i++) {
    const candidateId = `VE-${Math.floor(1000 + Math.random() * 9000)}`;
    const existing = await prisma.user.findUnique({ where: { id: candidateId } });
    if (!existing) return candidateId;
  }
  return `VE-${Date.now().toString().slice(-4)}`;
}

async function ensureProjectsExist(projectIds: string[]) {
  if (!projectIds || projectIds.length === 0) return [];
  const validIds: string[] = [];

  for (const id of projectIds) {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (existing) {
      validIds.push(existing.id);
    } else {
      // Find in static projects list
      const staticProj = (STATIC_PROJECTS as any[]).find(
        (p) => p.id === id || p.slug === id
      );
      if (staticProj) {
        // Find default category or create a default category
        let category = await prisma.projectCategory.findFirst();
        if (!category) {
          category = await prisma.projectCategory.create({
            data: {
              name: "Engineering Infrastructure",
              slug: "engineering-infrastructure",
            },
          });
        }

        // Find admin user for userId
        const adminUser = await prisma.user.findFirst({
          where: { role: "admin" },
        });

        if (adminUser) {
          const created = await prisma.project.create({
            data: {
              id: staticProj.id || staticProj.slug,
              title: staticProj.title,
              slug: staticProj.slug || staticProj.id,
              categoryId: category.id,
              location: staticProj.location || "Global Deployment",
              status: staticProj.status || (staticProj.completionDate ? "completed" : "ongoing"),
              startDate: staticProj.completionDate ? new Date(staticProj.completionDate) : null,
              completionDate: staticProj.completionDate ? new Date(staticProj.completionDate) : null,
              description: staticProj.description || staticProj.title,
              challenge: staticProj.challenge || staticProj.title,
              solution: staticProj.solution || staticProj.title,
              results: staticProj.results || [],
              coverImage: staticProj.mainImage || staticProj.coverImage || "/placeholder-project.jpg",
              additionalImages: staticProj.gallery || [],
              published: true,
              userId: adminUser.id,
            },
          });
          validIds.push(created.id);
        }
      }
    }
  }

  return validIds;
}

// GET all staff users
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const users = await prisma.user.findMany({
      where: {
        role: "user",
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        assignedProjects: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching staff users:", error);
    return NextResponse.json(
      { error: "Failed to fetch staff users" },
      { status: 500 }
    );
  }
}

// POST create staff user
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      username,
      email,
      bio,
      dob,
      profilePicture,
      jobTitle,
      startDate,
      pastWorks,
      yearsOfExperience,
      school,
      origin,
      livesIn,
      phoneNumber,
      awards,
      projectIds, // Array of project IDs to associate
    } = body;

    if (!name || !username) {
      return NextResponse.json(
        { error: "Full Name and Username are required fields" },
        { status: 400 }
      );
    }

    return await withPrismaRetry(async () => {
      // Check if username already exists
      const existingUsername = await prisma.user.findUnique({
        where: { username },
      });

      if (existingUsername) {
        return NextResponse.json(
          { error: "A user with this username already exists" },
          { status: 400 }
        );
      }

      // Check if email already exists (if provided)
      if (email) {
        const existingEmail = await prisma.user.findUnique({
          where: { email },
        });

        if (existingEmail) {
          return NextResponse.json(
            { error: "A user with this email already exists" },
            { status: 400 }
          );
        }
      }

      // Ensure all project IDs exist in DB
      const validProjectIds = await ensureProjectsExist(projectIds || []);
      const shortId = await generateShortUserId();

      // Create user with clean short ID
      const newUser = await prisma.user.create({
        data: {
          id: shortId,
          name,
          username,
          email: email || null,
          bio: bio || null,
          dob: dob ? new Date(dob) : null,
          profilePicture: profilePicture || null,
          jobTitle: jobTitle || null,
          startDate: startDate ? new Date(String(startDate).length === 4 ? `${startDate}-01-01` : startDate) : null,
          pastWorks: pastWorks || null,
          yearsOfExperience: yearsOfExperience ? parseInt(yearsOfExperience) : null,
          school: school || null,
          origin: origin || null,
          livesIn: livesIn || null,
          phoneNumber: phoneNumber || null,
          awards: awards || null,
          role: "user",
          assignedProjects: validProjectIds.length > 0
            ? {
                connect: validProjectIds.map((id: string) => ({ id })),
              }
            : undefined,
        },
        include: {
          assignedProjects: true,
        },
      });

      return NextResponse.json(newUser, { status: 201 });
    });
  } catch (error) {
    console.error("Error creating staff user:", error);
    return NextResponse.json(
      { error: "Failed to create staff user" },
      { status: 500 }
    );
  }
}
