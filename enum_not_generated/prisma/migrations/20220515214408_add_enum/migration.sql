-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'BLUE');

-- CreateTable
CREATE TABLE "Dummy" (
    "id" UUID NOT NULL,

    CONSTRAINT "Dummy_pkey" PRIMARY KEY ("id")
);
