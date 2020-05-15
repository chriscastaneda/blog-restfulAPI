/*BLOG_APP_ROLE*/
--Add Authors
INSERT INTO authors (FIRST_NAME, LAST_NAME email)
	VALUES ;

--Join Left
SELECT 
	authors.id,	authors.first_name, authors.last_name, 
	post.id, post.title, post.body, post.publish_date 
	FROM authors LEFT JOIN post ON authors.id = post.authors_id;



SELECT post.* FROM authors LEFT JOIN post ON authors.id = post.authors_id;

/*
SELECT * FROM pets LEFT JOIN junction ON pets.id = junction.pets_id;



CREATE TABLE authors (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(100)
);


CREATE TABLE post (
	id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title VARCHAR(40),
	body VARCHAR(1000),
	publish_date DATE,
	authors_id INTEGER REFERENCES authors(id)
);
*/