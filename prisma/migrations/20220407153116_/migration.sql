/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `Commerce` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `commerce` ADD COLUMN `profileId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Commerce_profileId_key` ON `Commerce`(`profileId`);
