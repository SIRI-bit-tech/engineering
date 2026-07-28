import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/**
 * Executes a Prisma database operation with automatic reconnection retry
 * if a idle PostgreSQL connection is dropped (e.g. PostgresError 08P01).
 */
export async function withPrismaRetry<T>(fn: () => Promise<T>, maxRetries = 2): Promise<T> {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return await fn();
    } catch (error: any) {
      attempts++;
      const errMsg = error?.message || String(error);
      const isClosedConn =
        errMsg.includes("server conn crashed") ||
        errMsg.includes("Closed") ||
        errMsg.includes("08P01");

      if (isClosedConn && attempts < maxRetries) {
        console.warn(`[Prisma] Connection dropped (attempt ${attempts}/${maxRetries}), reconnecting...`);
        try {
          await prisma.$disconnect();
        } catch (_) {}
        await prisma.$connect();
        await new Promise((resolve) => setTimeout(resolve, 150));
        continue;
      }
      throw error;
    }
  }
  return fn();
}
