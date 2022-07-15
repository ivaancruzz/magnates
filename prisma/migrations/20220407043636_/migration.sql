/*
  Warnings:

  - You are about to drop the column `latitude` on the `caddress` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `caddress` table. All the data in the column will be lost.
  - You are about to drop the column `ubication` on the `caddress` table. All the data in the column will be lost.
  - Added the required column `number_street` to the `cAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `cAddress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `cAddress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `caddress` DROP COLUMN `latitude`,
    DROP COLUMN `longitude`,
    DROP COLUMN `ubication`,
    ADD COLUMN `number_street` INTEGER NOT NULL,
    ADD COLUMN `province` VARCHAR(191) NOT NULL,
    ADD COLUMN `street` VARCHAR(191) NOT NULL;
