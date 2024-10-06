-- DATABASE NAME: amaasjeans

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    article_no VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    style VARCHAR(255),
    color VARCHAR(255),
    category VARCHAR(255),
    gender VARCHAR(255),
    price INT,
    image_url VARCHAR(855)
);
