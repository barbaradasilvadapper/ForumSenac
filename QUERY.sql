-- Create the database
CREATE DATABASE projeto_forum;

-- Use the projeto_forum database
USE projeto_forum;

-- Create the "usuarios" table
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(120) NOT NULL,
    senha VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    photo VARCHAR(300) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the "tag" table
CREATE TABLE tag (
    TagID INT AUTO_INCREMENT NOT NULL,
    TagName VARCHAR(100) NOT NULL,
    TagDescription VARCHAR(1000) NOT NULL,
    Date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (TagID)
);

-- Create the "post" table
CREATE TABLE post (
    PostID INT AUTO_INCREMENT NOT NULL,
    UserID INT NOT NULL,
    PostName VARCHAR(300) NOT NULL,
    PostDescription TEXT NOT NULL,
    Tag1 INT NOT NULL,
    Tag2 INT NOT NULL,
    Tag3 INT NOT NULL,
    Photo VARCHAR(300) NOT NULL,
    Date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (PostID),
    FOREIGN KEY (UserID) REFERENCES usuarios(id),
    FOREIGN KEY (Tag1) REFERENCES tag(TagID),
    FOREIGN KEY (Tag2) REFERENCES tag(TagID),
    FOREIGN KEY (Tag3) REFERENCES tag(TagID)
);

-- Insert data into "tag" table
INSERT INTO tag (TagName, TagDescription) 
VALUES 
    ('políticas', 'Políticas são diretrizes estabelecidas para orientar decisões e ações em uma área específica, podendo ser criadas por governos, organizações ou grupos. Elas têm o propósito de influenciar comportamentos e alcançar objetivos definidos.'),
    ('trabalho', 'Um trabalho pode ser uma atividade remunerada realizada por um indivíduo em troca de uma compensação financeira ou benefícios.'),
    ('oportunidades', 'A oportunidade é uma situação favorável que oferece a possibilidade de alcançar um objetivo ou vantagem.');
