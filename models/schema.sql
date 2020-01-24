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

INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score)
VALUES (1, 'James', 122);
INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score)
VALUES (1, 'John', 178);
INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score)
VALUES (2, 'Chris', 242);
INSERT INTO qrZclhCfcO.Highscores (levelid, nickname, score)
VALUES (2, 'Kevin', 202);