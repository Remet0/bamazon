CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Shirt', 'Apparel', '50', '100');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Apples', 'Produce', '1', '350');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Toy Car', 'Toys', '15', '20');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Jeans', 'Apparel', '40', '150');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Lettuce', 'Produce', '0.50', '30');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Legos', 'Toys', '20', '40');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Pan', 'Appliances', '15', '30');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Socks', 'Apparel', '12', '150');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Pears', 'Produce', '2', '60');

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES('Bananas', 'Produce', '1', '200');