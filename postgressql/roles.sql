/*BLOG_APP_ROLE*/
--Add Authors
INSERT INTO authors (FIRST_NAME, LAST_NAME email)
	VALUES ;

--Custom Join Left
SELECT 
	authors.id,	authors.first_name, authors.last_name, 
	post.id, post.title, post.body, post.publish_date 
	FROM authors LEFT JOIN post ON authors.id = post.authors_id;


--Mitch Left Join
SELECT post.* FROM authors LEFT JOIN post ON authors.id = post.authors_id;

--Validate id
SELECT EXISTS(SELECT id FROM authors WHERE id = 1);