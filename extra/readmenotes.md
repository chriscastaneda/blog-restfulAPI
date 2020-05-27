read me test

npm init
Copy/Paste package.json
npm install pg typescript express bodyparser
npm install --save-dev nodemon ts-node body-parser @types/pg @types/express @types/node 
npm install tslint --init ??? or eslint
.gitignore		/*add manually*/ git init
tsconfig.js		/*add manually*/ tsc --init
npm install		/*to install node_modules for package.json edits*/

npm install --save-dev ts-jest jest @types/jest
npm install --save-dev supertest @types/supertest

npm test -- --watch //like nodemon
npm test -- --coverage //includes html file

/*side notes*/
# Locally in your project. 
npm install -D typescript
npm install -D ts-node

Testing:
Project test 80% functional code
Mocking(practice), 2:36:35
API Test -supertest
L:10,Morn, 2:32:50
 "TDD": code first, ajay test.
Exclude files from coverage test: 
Place this comment in every file that will be excluded on the top of file, line 1: /* istanbul ignore file */

 birthdate:
 L10, Lunc, v#2, 0:18:57 & 1:34:01 & 1:36:30
 L12, 0:57:17

 CRUD:
 --------
 Create: Post, /authors, body: {"firstName": "TestPatch"}
 Read: Get, /authors
 ReadById: Get, /authors/#
 Update: Patch, /authors, body: {"id": 9, "firstName": "TestPatch"}
 Delete: Dlelete, /authors/#  

 getPetsByPersonId:
 Get: people/#/Denny

Git Commands:
---------------
Add files:	Add one or more files to staging (index):	
git add <filename>
git add *

git rm foo to stage the file for deletion. (This will also delete the file from the file system, if it hadn't been previously deleted. It can, of course, be restored from git, since it was previously checked in.)
To stage the file for deletion without deleting it from the file system, use git rm --cached foo.

Commit:	Commit changes to head (but not yet to the remote repository):	
git commit -m "Commit message"

Push:	Send changes to the master branch of your remote repository:	
git push origin master



Presentation ChearSheet:
-----------------------------
authors:
1.View all users :/authors
2.Create new author :/authors
3.Update author :/authors


---------------------
Post:
1.View all post's: /posts
2.create article :/posts
3.update article :/posts 
4.Delete article :/posts/id

5.View all post's: /posts
6.View All Peter's articles: /posts/authors/id
7.View PETER post by title: /posts/id  


---------------------------
Comments:
8.View all comments: /comments/posts/id 
9.Create a comment :/comments 
10.update my comment :/comments
11.delete my comment :/comments/id

12.Delete my account :/authors/id
13.View all users :/authors

-----------
notes:
re-arrange aothor.ts interface
fix timestamp