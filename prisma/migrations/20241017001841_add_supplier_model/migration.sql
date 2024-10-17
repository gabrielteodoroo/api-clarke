-- CreateTable
CREATE TABLE "suppliers" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "originState" TEXT NOT NULL,
    "costPerKwh" DOUBLE PRECISION NOT NULL,
    "minKwhLimit" INTEGER NOT NULL,
    "totalClients" INTEGER NOT NULL,
    "averageRating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);
