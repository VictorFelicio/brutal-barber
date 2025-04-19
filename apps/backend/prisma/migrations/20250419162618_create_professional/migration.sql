-- CreateTable
CREATE TABLE "professional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "stars" REAL NOT NULL,
    "qtyReviews" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "professional_name_key" ON "professional"("name");
