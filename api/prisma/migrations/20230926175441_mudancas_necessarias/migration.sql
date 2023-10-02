/*
  Warnings:

  - You are about to drop the column `dataDoEmprestimo` on the `emprestimo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emprestimoId]` on the table `Devolucao` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Devolucao_livroId_fkey` ON `devolucao`;

-- DropIndex
DROP INDEX `Emprestimo_livroId_fkey` ON `emprestimo`;

-- AlterTable
ALTER TABLE `devolucao` ADD COLUMN `emprestimoId` INTEGER NULL;

-- AlterTable
ALTER TABLE `emprestimo` DROP COLUMN `dataDoEmprestimo`;

-- CreateIndex
CREATE UNIQUE INDEX `Devolucao_emprestimoId_key` ON `Devolucao`(`emprestimoId`);

-- AddForeignKey
ALTER TABLE `Devolucao` ADD CONSTRAINT `Devolucao_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Devolucao` ADD CONSTRAINT `Devolucao_emprestimoId_fkey` FOREIGN KEY (`emprestimoId`) REFERENCES `Emprestimo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
