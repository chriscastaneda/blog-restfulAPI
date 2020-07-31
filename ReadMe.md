[![Demo](https://github.com/chriscastaneda/rev-p0-restfulAPI/blob/master/assests/img/demo_snip.PNG)](https://drive.google.com/file/d/1OwGqfscMwRI50urK1upcFeucRw360DEK/view?usp=sharing)

# Simple Blog API

A interactive RESTful API representing a blog posting platform containing basic _Authors_ options, article(_Posts_) database, and _Commenting_ system.

**Tech Stack:**
- [x] TypeScript
- [x] PostGreSQL
- [x] node-postgre
- [x] Express
- [x] Jest
- [x] Git SCM (on GitHub)

## Features
- RESTful API (Meets the Level 2 of the [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html))
- Documentation (all methods have basic documentation)
- Unit testing (> 80% coverage)
- SQL Data Persistance (3 tables; all 3NF)
- Filter by authors (added)
- Commenting system (added)

## Init Instructions
- install node 6.14.4 or higher
- npm install

### Postman
  - npm start
  - test on http://localhost:3000
  - Endpoints:
```
Authors:
1. View all users: /authors
2. Create new author: /authors
3. Update author: /authors
4. Delete my account: /authors/id
5. View all users: /authors

Posts:
1. View all post's: /posts
2. Create article: /posts
3. Update article: /posts 
4. Delete article: /posts/id
5. View all post's: /posts
6. View All Peter's articles: /posts/authors/id
7. View PETER post by title: /posts/id  

Comments:
1. View all comments by post: /comments/posts/id 
2. Create a comment: /comments 
3. Update my comment: /comments
4. Delete my comment: /comments/id
5. View all comments: /comments
```
### Test Coverage
  - npm test
  - view in browser: coverage/icon-report/index.html
