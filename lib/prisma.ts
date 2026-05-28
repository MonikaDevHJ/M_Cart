// Prisma Client is an auto Genrate Javascript tool that allows us to interact with database using simple and type-safe queries

// Uses of This File **************
// Next js Hot Reload Will create Many Database Connection, then i get Many Databse Connection But this file Create Only one Prsima instance Globally That why we use globalForPrisma.prisma

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
} 


