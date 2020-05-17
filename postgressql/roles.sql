/*BLOG_APP_ROLE*/
--Add Authors
INSERT INTO authors (FIRST_NAME, LAST_NAME email)
	VALUES ;

--Custom Join Left
SELECT 
	authors.id,	authors.first_name, authors.last_name, 
	posts.id, posts.title, posts.body, posts.publish_date 
	FROM authors LEFT JOIN posts ON authors.id = posts.authors_id;

--Posts -Read all author posts: /posts/authors
SELECT 
	posts.title, posts.body, posts.publish_date, posts.authors_id
	authors.first_name, authors.last_name
	FROM posts LEFT JOIN authors ON posts.authors_id = authors.id WHERE authors.id = 1;


--Mitch Left Join
SELECT posts.* FROM authors LEFT JOIN posts ON authors.id = posts.authors_id;

--Validate id
SELECT EXISTS(SELECT id FROM authors WHERE id = 1);



--SELECT FROM title with comments
SELECT posts.*, authors.first_name, authors.last_name, commenting.body, commenting.publish_date 
FROM posts LEFT JOIN authors ON posts.authors_id = authors.id
LEFT JOIN commenting ON authors.id = commenting.authors_id
WHERE posts.title = 'Peters Article';

--SELECT FROM title
SELECT * FROM posts WHERE title = 'Peters Article';