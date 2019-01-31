CREATE TABLE blogPosts (
  blogID      INT AUTO_INCREMENT,
  blogDate    DATE NOT NULL,
  blogTitle   VARCHAR(250) NOT NULL,
  blogPost    TEXT NOT NULL,

  PRIMARY KEY     (blogID)
);
