-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;


CREATE TABLE qrZclhCfcO.Highscores (
	id int NOT NULL AUTO_INCREMENT,
    levelid int NOT NULL,
    nickname varchar(30) NOT NULL,
    score int NOT NULL,
    PRIMARY KEY (id)
);




INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score, createdAt)
VALUES (3, 'John', 5, '1970-01-01 00:00:00');
INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score, createdAt)
VALUES (3, 'Chris', 5, '1970-01-01 00:00:00');
INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score, createdAt)
VALUES (3, 'Kevin', 3, '1970-01-01 00:00:00');
INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score, createdAt)
VALUES (3, 'Kevin', 2, '1970-01-01 00:00:00');