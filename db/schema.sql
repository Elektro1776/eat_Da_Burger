CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured TINYINT(4) NULL DEFAULT 0,
  date TIMESTAMP,
  Primary Key (id))
