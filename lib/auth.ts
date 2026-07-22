import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text" },
        userId: { label: "User ID", type: "text" }
      },
      async authorize(credentials) {
        // Staff Login
        if (credentials?.username && credentials?.userId) {
          const user = await prisma.user.findFirst({
            where: {
              username: credentials.username,
              id: credentials.userId,
              role: "user"
            }
          });

          if (!user) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            email: user.email || `${user.username}@voltaedge.com`,
            name: user.name || user.username,
            role: user.role,
          };
        }

        // Admin Login
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || user.role !== "admin") {
          throw new Error("Invalid credentials");
        }

        if (!user.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email || "",
          name: user.name || "",
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
