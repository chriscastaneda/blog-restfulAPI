/*DML FILE*/

--Author Table	
INSERT INTO authors (first_name, last_name, email) VALUES 
	('Peter', 'Parker', 'mjlover69@sonypictures.com'),
	('Batman', 'Beyond', 'im-the-batman@detectivecomicscomics.com'), 
	('Wade', 'Wilson', 'xforce_alumni@deadpool.edu'),
	('Billy', 'Batson', 'dope.superhero@theshazamster.com'),
	('Pepper', 'Potts', 'iloveyou3000@avengers.co'),
	('Abby', 'Adams', 'abby.adams@gmail.com');
--DROP TABLE authors;


--Post Table
INSERT INTO post (title, body, publish_date) VALUES 
	('Peters Article', 'Body Here', '2020-01-01'::DATE),
	('Batmans Article', 'Body Here', '2020-02-01'::DATE), 
	('Wades Article', 'Body Here', '2020-03-01'::DATE),
	('Billys Article', 'Body Here', '2020-04-01'::DATE),
	('Peppers Article', 'Body Here', '2020-05-01'::DATE),
	('Abbys Article', 'Body Here', '2020-06-01'::DATE);
	