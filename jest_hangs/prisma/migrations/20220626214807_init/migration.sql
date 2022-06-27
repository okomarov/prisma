-- CreateTable
CREATE TABLE "Entity" (
    "id" UUID NOT NULL DEFAULT public.gen_random_uuid(),

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);
