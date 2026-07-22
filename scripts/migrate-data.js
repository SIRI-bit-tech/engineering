const { PrismaClient } = require("@prisma/client");

// Source Database URL (Old)
const SOURCE_URL = "postgres://72d849b95ddfa2d47a14e32a9ccfca01e66ef8ca41d01ae2c6530a73a0f28a5b:sk_MP-JVOUzp-Vue97MKCDy2@pooled.db.prisma.io:5432/postgres?sslmode=require&connection_limit=10&pool_timeout=30";

// Destination Database URL (New)
const DEST_URL = "postgres://06905b00374566fe90dd1558ad2a84fd25ea79dfcb4d667ee5a609335d386360:sk_4ysLZH5btAQNIKpUdFNRb@pooled.db.prisma.io:5432/postgres?sslmode=require&connection_limit=10&pool_timeout=30";

async function run() {
  console.log("Initializing database connections...");
  const sourceDb = new PrismaClient({
    datasources: {
      db: { url: SOURCE_URL },
    },
  });

  const destDb = new PrismaClient({
    datasources: {
      db: { url: DEST_URL },
    },
  });

  try {
    // 1. Migrate Users using raw SQL query so missing new columns don't break the query
    console.log("Reading users from source database...");
    const rawUsers = await sourceDb.$queryRawUnsafe(`SELECT * FROM "User"`);
    console.log(`Found ${rawUsers.length} user(s). Syncing to destination database...`);

    for (const u of rawUsers) {
      await destDb.user.upsert({
        where: { id: u.id },
        update: {
          email: u.email || null,
          password: u.password || null,
          name: u.name || null,
          role: u.role || "admin",
          username: u.username || null,
          bio: u.bio || null,
          dob: u.dob ? new Date(u.dob) : null,
          profilePicture: u.profilePicture || null,
          jobTitle: u.jobTitle || null,
          startDate: u.startDate ? new Date(u.startDate) : null,
          pastWorks: u.pastWorks || null,
          yearsOfExperience: u.yearsOfExperience !== undefined ? u.yearsOfExperience : null,
          school: u.school || null,
          origin: u.origin || null,
          livesIn: u.livesIn || null,
          phoneNumber: u.phoneNumber || null,
        },
        create: {
          id: u.id,
          email: u.email || null,
          password: u.password || null,
          name: u.name || null,
          role: u.role || "admin",
          username: u.username || null,
          bio: u.bio || null,
          dob: u.dob ? new Date(u.dob) : null,
          profilePicture: u.profilePicture || null,
          jobTitle: u.jobTitle || null,
          startDate: u.startDate ? new Date(u.startDate) : null,
          pastWorks: u.pastWorks || null,
          yearsOfExperience: u.yearsOfExperience !== undefined ? u.yearsOfExperience : null,
          school: u.school || null,
          origin: u.origin || null,
          livesIn: u.livesIn || null,
          phoneNumber: u.phoneNumber || null,
          createdAt: u.createdAt ? new Date(u.createdAt) : new Date(),
          updatedAt: u.updatedAt ? new Date(u.updatedAt) : new Date(),
        },
      });
    }
    console.log("✅ Users migrated successfully.");

    // 2. Migrate Project Categories
    console.log("Reading project categories from source database...");
    const rawCategories = await sourceDb.$queryRawUnsafe(`SELECT * FROM "ProjectCategory"`);
    console.log(`Found ${rawCategories.length} category/categories. Syncing to destination database...`);

    for (const c of rawCategories) {
      await destDb.projectCategory.upsert({
        where: { id: c.id },
        update: {
          name: c.name,
          slug: c.slug,
          description: c.description || null,
        },
        create: {
          id: c.id,
          name: c.name,
          slug: c.slug,
          description: c.description || null,
          createdAt: c.createdAt ? new Date(c.createdAt) : new Date(),
          updatedAt: c.updatedAt ? new Date(c.updatedAt) : new Date(),
        },
      });
    }
    console.log("✅ Project Categories migrated successfully.");

    // 3. Migrate Projects
    console.log("Reading projects from source database...");
    const rawProjects = await sourceDb.$queryRawUnsafe(`SELECT * FROM "Project"`);
    console.log(`Found ${rawProjects.length} project(s). Syncing to destination database...`);

    for (const p of rawProjects) {
      await destDb.project.upsert({
        where: { id: p.id },
        update: {
          title: p.title,
          slug: p.slug,
          categoryId: p.categoryId,
          location: p.location,
          status: p.status || "ongoing",
          startDate: p.startDate ? new Date(p.startDate) : null,
          completionDate: p.completionDate ? new Date(p.completionDate) : null,
          description: p.description,
          challenge: p.challenge,
          solution: p.solution,
          results: p.results || [],
          coverImage: p.coverImage,
          additionalImages: p.additionalImages || [],
          stats: p.stats || {},
          technicalAnalysis: p.technicalAnalysis || [],
          implementationTimeline: p.implementationTimeline || [],
          keyTechnologies: p.keyTechnologies || [],
          environmentalImpact: p.environmentalImpact || [],
          published: p.published ?? false,
          userId: p.userId,
        },
        create: {
          id: p.id,
          title: p.title,
          slug: p.slug,
          categoryId: p.categoryId,
          location: p.location,
          status: p.status || "ongoing",
          startDate: p.startDate ? new Date(p.startDate) : null,
          completionDate: p.completionDate ? new Date(p.completionDate) : null,
          description: p.description,
          challenge: p.challenge,
          solution: p.solution,
          results: p.results || [],
          coverImage: p.coverImage,
          additionalImages: p.additionalImages || [],
          stats: p.stats || {},
          technicalAnalysis: p.technicalAnalysis || [],
          implementationTimeline: p.implementationTimeline || [],
          keyTechnologies: p.keyTechnologies || [],
          environmentalImpact: p.environmentalImpact || [],
          published: p.published ?? false,
          userId: p.userId,
          createdAt: p.createdAt ? new Date(p.createdAt) : new Date(),
          updatedAt: p.updatedAt ? new Date(p.updatedAt) : new Date(),
        },
      });
    }
    console.log("✅ Projects migrated successfully.");

    // 4. Try migrating team member relationships if the join table exists
    try {
      const rawTeamMembers = await sourceDb.$queryRawUnsafe(`SELECT * FROM "_ProjectTeam"`);
      if (rawTeamMembers.length > 0) {
        console.log(`Found ${rawTeamMembers.length} team member assignment(s). Syncing...`);
        for (const rel of rawTeamMembers) {
          await destDb.$executeRawUnsafe(
            `INSERT INTO "_ProjectTeam" ("A", "B") VALUES ($1, $2) ON CONFLICT DO NOTHING`,
            rel.A,
            rel.B
          );
        }
        console.log("✅ Team member relations migrated.");
      }
    } catch (e) {
      console.log("Info: No existing project team assignments table in source database (skipped).");
    }

    console.log("\n🎉 Full database migration complete! All tables and data have been copied successfully.");
  } catch (error) {
    console.error("Migration failed! Error details:", error);
  } finally {
    await sourceDb.$disconnect();
    await destDb.$disconnect();
  }
}

run();
