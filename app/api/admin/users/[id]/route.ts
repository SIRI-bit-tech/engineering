import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PROJECTS as STATIC_PROJECTS } from "@/constants/constants";

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

// GET a specific staff user
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: { id },
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

    if (!user || user.role !== "user") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json(
      { error: "Failed to fetch user details" },
      { status: 500 }
    );
  }
}

// PATCH update a specific staff user
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
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
      projectIds, // Array of project IDs
    } = body;

    // Verify user exists and is a staff user
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser || existingUser.role !== "user") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // If username is changing, verify it is unique
    if (username && username !== existingUser.username) {
      const duplicateUsername = await prisma.user.findUnique({
        where: { username },
      });
      if (duplicateUsername) {
        return NextResponse.json(
          { error: "A user with this username already exists" },
          { status: 400 }
        );
      }
    }

    // If email is changing, verify it is unique
    if (email && email !== existingUser.email) {
      const duplicateEmail = await prisma.user.findUnique({
        where: { email },
      });
      if (duplicateEmail) {
        return NextResponse.json(
          { error: "A user with this email already exists" },
          { status: 400 }
        );
      }
    }

    // Ensure all assigned projects exist in database
    const validProjectIds = projectIds !== undefined
      ? await ensureProjectsExist(projectIds)
      : undefined;

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        username: username !== undefined ? username : undefined,
        email: email !== undefined ? (email || null) : undefined,
        bio: bio !== undefined ? (bio || null) : undefined,
        dob: dob !== undefined ? (dob ? new Date(dob) : null) : undefined,
        profilePicture: profilePicture !== undefined ? (profilePicture || null) : undefined,
        jobTitle: jobTitle !== undefined ? (jobTitle || null) : undefined,
        startDate: startDate !== undefined ? (startDate ? new Date(String(startDate).length === 4 ? `${startDate}-01-01` : startDate) : null) : undefined,
        pastWorks: pastWorks !== undefined ? (pastWorks || null) : undefined,
        yearsOfExperience: yearsOfExperience !== undefined ? (yearsOfExperience ? parseInt(yearsOfExperience) : null) : undefined,
        school: school !== undefined ? (school || null) : undefined,
        origin: origin !== undefined ? (origin || null) : undefined,
        livesIn: livesIn !== undefined ? (livesIn || null) : undefined,
        phoneNumber: phoneNumber !== undefined ? (phoneNumber || null) : undefined,
        awards: awards !== undefined ? awards : undefined,
        assignedProjects: validProjectIds !== undefined
          ? {
              set: validProjectIds.map((pid: string) => ({ id: pid })),
            }
          : undefined,
      },
      include: {
        assignedProjects: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user details:", error);
    return NextResponse.json(
      { error: "Failed to update user details" },
      { status: 500 }
    );
  }
}

// DELETE a specific staff user
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser || existingUser.role !== "user") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
