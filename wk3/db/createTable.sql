CREATE TABLE books(
  id              INT unsigned auto_increment, # Unique ID for the record
  title           VARCHAR(255),                # Full title of the book
  author          VARCHAR(255),                # The author of the book
  description     TEXT,

 PRIMARY KEY     (id)
);
