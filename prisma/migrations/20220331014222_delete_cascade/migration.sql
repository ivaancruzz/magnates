-- DropForeignKey
ALTER TABLE `caddress` DROP FOREIGN KEY `cAddress_commerceId_fkey`;

-- DropForeignKey
ALTER TABLE `cconfiguration` DROP FOREIGN KEY `cConfiguration_commerceId_fkey`;

-- DropForeignKey
ALTER TABLE `cemail` DROP FOREIGN KEY `cEmail_commerceId_fkey`;

-- DropForeignKey
ALTER TABLE `commerceonsection` DROP FOREIGN KEY `CommerceOnSection_commerceId_fkey`;

-- DropForeignKey
ALTER TABLE `commerceonsection` DROP FOREIGN KEY `CommerceOnSection_sectionId_fkey`;

-- DropForeignKey
ALTER TABLE `cphone` DROP FOREIGN KEY `cPhone_commerceId_fkey`;

-- DropForeignKey
ALTER TABLE `cproduct` DROP FOREIGN KEY `cProduct_commerceId_fkey`;

-- DropForeignKey
ALTER TABLE `pimage` DROP FOREIGN KEY `pImage_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productoncategorie` DROP FOREIGN KEY `ProductOnCategorie_categorieId_fkey`;

-- DropForeignKey
ALTER TABLE `productoncategorie` DROP FOREIGN KEY `ProductOnCategorie_productId_fkey`;

-- AddForeignKey
ALTER TABLE `cConfiguration` ADD CONSTRAINT `cConfiguration_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cAddress` ADD CONSTRAINT `cAddress_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cEmail` ADD CONSTRAINT `cEmail_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cPhone` ADD CONSTRAINT `cPhone_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cProduct` ADD CONSTRAINT `cProduct_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pImage` ADD CONSTRAINT `pImage_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `cProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnCategorie` ADD CONSTRAINT `ProductOnCategorie_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `cProduct`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnCategorie` ADD CONSTRAINT `ProductOnCategorie_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `cCategorie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommerceOnSection` ADD CONSTRAINT `CommerceOnSection_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `Section`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommerceOnSection` ADD CONSTRAINT `CommerceOnSection_commerceId_fkey` FOREIGN KEY (`commerceId`) REFERENCES `Commerce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
