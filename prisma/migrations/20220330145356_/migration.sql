/*
  Warnings:

  - You are about to drop the `pcategorie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `productoncategorie` DROP FOREIGN KEY `ProductOnCategorie_categorieId_fkey`;

-- DropTable
DROP TABLE `pcategorie`;

-- CreateTable
CREATE TABLE `cCategorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `commerceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cCategorie` ADD CONSTRAINT `cCategorie_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnCategorie` ADD CONSTRAINT `ProductOnCategorie_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `cCategorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
