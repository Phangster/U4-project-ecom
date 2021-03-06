DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users_items;


CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  item TEXT NOT NULL,
  img TEXT NOT NULL,
  short_description TEXT NOT NULL,
  long_description TEXT NOT NULL,
  price FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS users_items (
  id SERIAL PRIMARY KEY,
  user_id INT,
  items_id INT
);