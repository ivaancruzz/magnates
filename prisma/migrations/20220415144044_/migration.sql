/*
  Warnings:

  - Added the required column `link_name` to the `cProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cproduct` ADD COLUMN `link_name` VARCHAR(191) NOT NULL;
