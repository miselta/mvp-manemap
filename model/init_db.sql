SET
    foreign_key_checks = 0;
    -- drop tables
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS stores;
DROP TABLE IF EXISTS products_stores;

SET
    foreign_key_checks = 1;

-- create tables
CREATE TABLE products (
	ID INT NOT NULL AUTO_INCREMENT,
	productName varchar(255) NOT NULL,
	price INT NOT NULL,
    quantity INT,
	quantityUnits varchar(255),
	productImage varchar(500) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE stores (
	ID INT NOT NULL AUTO_INCREMENT,
	storeName varchar(255) NOT NULL,
	storeAddress varchar(255) NOT NULL,
	storeCity varchar(255) NOT NULL,
	storeCountry varchar(255) NOT NULL,
	storePostalCode varchar(255),
	storeImage varchar(500) NOT NULL, 
	PRIMARY KEY (ID)
);

CREATE TABLE products_stores (
	ID INT NOT NULL AUTO_INCREMENT,
	FK_productsID INT NOT NULL,
	FK_storesID INT NOT NULL,
	productPrice INT NOT NULL, 
	PRIMARY KEY (ID)
);

ALTER TABLE products_stores ADD CONSTRAINT products_stores_fk0 FOREIGN KEY (FK_productsID) REFERENCES products(ID);

ALTER TABLE products_stores ADD CONSTRAINT products_stores_fk1 FOREIGN KEY (FK_storesID) REFERENCES stores(ID);

-- default data:
INSERT INTO products (productName, price, quantity, quantityUnits, productImage) VALUES 
('Comb', 5, 10, 'g', 'https://cdn.shopify.com/s/files/1/2236/8407/products/CCC-2T_800x.jpg?v=1552581024'), 
('Gel', 8, 250, 'ml', 'https://m.media-amazon.com/images/I/71C3bKEcS-L._AC_SX425_.jpg'), 
('Beads', 10, 50, 'g', 'https://sc04.alicdn.com/kf/Hdaa53a9673de47be967e4ddfabdec4f1R.jpg');

INSERT INTO stores (storeName, storeAddress, storeCity, storeCountry, storePostalCode, storeImage) VALUES 
('Diva Hair Store', 'Carrer d''en Grassot, 15', 'Barcelona', 'Spain', '08025', 'https://images.bizbuysell.com/shared/listings/196/1966666/0526ea4f-423e-4f1f-b2b7-530e8f20ef6d-W496.jpg'), 
('Angel Beauty Supply', 'Carrer del Casp, 33', 'Palma de Mallorca', 'Spain', '07012', 'https://www.gannett-cdn.com/presto/2022/01/28/PPEN/5a3a282f-dd35-4bb2-bdff-ddcbaaca65dc-JoJos_Beauty_Supply-001.jpg?crop=2999,1687,x0,y381&width=660&height=372&format=pjpg&auto=webp'),
('Palacio del Afro', 'Calle de la Hada, 44', 'Malaga', 'Spain', '04040', 'https://s3-media0.fl.yelpcdn.com/bphoto/ihHkLumMeswOR_XXfeICAw/l.jpg');

INSERT INTO products_stores (FK_productsID, FK_storesID, productPrice) VALUES (1, 1, 10), (2, 3, 5), (3, 3, 4), (1, 2, 3);