-- CreateTable
CREATE TABLE `Livro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `autor` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `anoDePublicacao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Livro_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprestimo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataDoEmprestimo` DATETIME(3) NOT NULL,
    `nomeDaPessoa` VARCHAR(191) NOT NULL,
    `livroId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Devolucao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataDevolucaoReal` DATETIME(3) NOT NULL,
    `nomeDaPessoa` VARCHAR(191) NOT NULL,
    `livroId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Devolucao` ADD CONSTRAINT `Devolucao_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
