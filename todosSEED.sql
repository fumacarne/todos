DROP DATABASE IF EXISTS todos_db;
CREATE DATABASE todos_db;
USE todos_db;
CREATE TABLE todos (
id INT NOT NULL auto_increment,
todo VARCHAR (100) NOT NULL,
complete BOOLEAN  default False,
PRIMARY KEY (id)
);


insert into todos (todo) values 
("learn Rest"),
("play ping pong"),
("build our own ORM"),
('discuss MVC for structuring our apps'),
("use GD Heroku");