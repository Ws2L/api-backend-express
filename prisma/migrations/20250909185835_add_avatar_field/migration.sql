-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatar` TEXT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `pass` VARCHAR(255) NOT NULL;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_email_key` TO `email`;
