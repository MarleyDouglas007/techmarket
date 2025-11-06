

CREATE DATABASE techmarket;
USE techmarket;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  preco DECIMAL(10,2)
);

INSERT INTO produtos (nome, preco) VALUES
('kit Ryzer 7 5600G', 2500.00),
('Luva de Boxe', 200.00),
('Controle Xbox', 550.00);
