CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgerss
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_id TIMESTAMP,
	PRIMARY KEY(id)
);