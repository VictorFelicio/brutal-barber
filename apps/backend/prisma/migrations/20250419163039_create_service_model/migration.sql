-- CreateTable
CREATE TABLE "service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qtySlots" REAL NOT NULL,
    "imageURL" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "service_name_key" ON "service"("name");
