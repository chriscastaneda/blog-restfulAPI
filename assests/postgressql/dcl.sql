/*DCL File*/
CREATE ROLE blog_app_role LOGIN PASSWORD 'Password1';
--DROP ROLE blog_app_role;

/*Privaleges*/
GRANT SELECT, UPDATE, INSERT, DELETE ON ALL TABLES IN SCHEMA public TO blog_app_role;

/*Privaleges*/
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO blog_app_role;





