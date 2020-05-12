import express from 'express';
import * as authorService from '../services/author-service';
import { Author } from '../models/Author';

/**Export authors from database */
export const authorRouter = express.Router();



/**CRUD from database */

/**READ */
authorRouter.get('', (request, response, next) => { //localhost:3000/author
    const authors: Author[] = authorService.getAllAuthors(); //calling from services into new object group
    response.json(authors); //store user in json
    next();
});

/**READ by id */
authorRouter.get('/:id', (request, response, next) => { //localhost:3000/author/id
    const id = parseInt(request.params.id); //request id as integer
    const author = authorService.getAuthorById(id);
    if(!author){
        response.sendStatus(404); //if return object does not exist
    }else{
        response.json(author);
    }
    next();
});

/**CREATE */
authorRouter.post('', (request, response, next) => { //localhost:3000/author
    const author = request.body; //request entire body
    const createdAuthors = authorService.saveAuthor(author); //returns new object to database
    response.status(201);
    response.json(createdAuthors); //return new object
    next();
});