import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@voltaedge.com";
  const password = process.env.ADMIN_PASSWORD || "Emuesiri@12";

  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    console.log("Admin user already exists");
    return;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  console.log("Admin user created successfully:");
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("\n⚠️  Please change the password after first login!");

  // Create default categories
  const defaultCategories = [
    { name: "Renewable Integration", slug: "renewable-integration" },
    { name: "Infrastructure", slug: "infrastructure" },
    { name: "Rural Electrification", slug: "rural-electrification" },
  ];

  for (const category of defaultCategories) {
    const existing = await prisma.projectCategory.findUnique({
      where: { slug: category.slug },
    });

    if (!existing) {
      await prisma.projectCategory.create({
        data: category,
      });
      console.log(`Created category: ${category.name}`);
    }
  }

  console.log("\n✅ Setup complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
