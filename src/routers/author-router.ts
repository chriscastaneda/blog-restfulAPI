import express from 'express';
import * as authorService from '../services/author-service';
import { Author } from '../models/Author';

/**Export authors from database */
export const authorRouter = express.Router();



/**CRUD from database */

/**READ */
authorRouter.get('', (request, response, next) => {
    const users: Author[] = authorService.getAllAuthors(); //calling from services
    response.json(users); //store in json
    next();
});

/**READ by id */
authorRouter.get('/:id', (request, response, next) => {
    const id = parseInt(request.params.id);
    cosnt user = authorService.getAuthorById(id); //calling from services
    response.json(user);
    next();
});

/**CREATE */
authorRouter.post('', (request, response, next) => {
    
});