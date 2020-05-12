import { Author } from '../models/Author';
import * as authorDao from '../daos/author-dao';
/**Application Logic */


//Store new JS Author Object in array??
export function getAllAuthors(): Author[] {
    //Apply internal logic here(user privalleges/rules/authentication)
    return authorDao.getAllAuthors();
};

//Reference object by database id
export function getAuthorById(id: number): Author {
    //Apply internal logic here(user privalleges/rules/authentication)
    return authorDao.getAllAuthorById(id);
};

//Reference database object
export function saveAuthor(author: any): Author {
    const newAuthor = new Author ( //create only needed object properties rule
        undefined, //set id to undefined for sql inkection
        author.firstName, 
        author.lastName, 
        author.email
    )

    if(author.firstName && author.lastName && author.email){ //Data is valide - submit to DAO
        return authorDao.saveAuthor(newAuthor);
    }else{
        //PASS
    }
};