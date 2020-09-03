# Blogger API

A interactive RESTful API representing a blog posting platform containing basic _Authors_ options, a _Blog Posts_ database, and user _Commenting_ system.

**Tech Stack:**
- [x] TypeScript
- [x] PostGreSQL
- [x] Node-Postgre (AWS-RDS)
- [x] Express
- [x] Jest
- [x] Git SCM (on GitHub)

_*View live demo below_

**Preview**:
[![Demo](https://github.com/chriscastaneda/rev-p0-restfulAPI/blob/master/assests/img/demo_snip.PNG)](https://drive.google.com/file/d/1OwGqfscMwRI50urK1upcFeucRw360DEK/view?usp=sharing)

## Features
- RESTful API (Meets the Level 2 of the [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html))
- Documentation (all methods have basic documentation)
- Unit testing (> 80% coverage)
- SQL Data Persistance (3 tables; all 3NF)
- Filter by authors (added)
- Commenting system (added)

## Live Demo
  1. Open in new tab: https://reqbin.com/
  2. Copy url into blue-fieldbox (http://ec2-54-183-207-67.us-west-1.compute.amazonaws.com:3000/authors)
  3. Click send to see response!
  4. Follow the _Endpoint instructions_ below to interact with api.

## Init Instructions
- install node 6.14.4 or higher
- _server/_ npm install

### Postman
  - npm start
  - test on http://localhost:3000
  - Endpoint instructions:
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
  1. npm test
  2. view in browser: coverage/icon-report/index.html
  - [test_coverage](https://github.com/chriscastaneda/rev-p0-restfulAPI/blob/master/assests/img/test_coverage.PNG) 

