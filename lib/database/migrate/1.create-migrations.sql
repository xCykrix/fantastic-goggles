-- TRANSACT CREATE MIGRATIONS TABLE
CREATE TABLE IF NOT EXISTS `am_api`.`rbx_migrations` (
  `id` VARCHAR(255) NOT NULL,
  `migrated` INT(1) NOT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`));
