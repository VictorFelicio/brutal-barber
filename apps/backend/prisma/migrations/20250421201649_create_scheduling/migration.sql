-- CreateTable
CREATE TABLE "scheduling" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "professionalId" INTEGER NOT NULL,
    CONSTRAINT "scheduling_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "scheduling_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SchedulingToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SchedulingToService_A_fkey" FOREIGN KEY ("A") REFERENCES "scheduling" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SchedulingToService_B_fkey" FOREIGN KEY ("B") REFERENCES "service" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_SchedulingToService_AB_unique" ON "_SchedulingToService"("A", "B");

-- CreateIndex
CREATE INDEX "_SchedulingToService_B_index" ON "_SchedulingToService"("B");
