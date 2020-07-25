### Schema

CREATE DATABASE bucketlist_db;
USE bucketlist_db;

CREATE TABLE bucketlist
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
