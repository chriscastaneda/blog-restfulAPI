import { dbConnection} from '../daos/db';
import { Author, AuthorRow } from '../models/Author';
import { Post } from '../models/Post';
/**Database query logic */


//Retrieve all
export function getAllAuthors(): Promise<Author[]> { //Promise<Author[]> returning promise
    const sql = 'SELECT * FROM authors'; //Query database
    
    return dbConnection.query<AuthorRow>(sql, []).then(result => { //return promise type as QueryResult<AuthorRow>
        const queryrows: AuthorRow[] = result.rows; //extract rows from query response
        const authors: Author[] = queryrows.map(row => Author.from(row)); //convert sql row data format into author.ts(static method) JS objects
        return authors; //return promise<Author[]>
    });
};

//Retrieve by Id
export function getAllAuthorById(id: number): Promise<Author> {
    const sql = 'SELECT * FROM authors WHERE id = $1'; //Parameterize queries

    return dbConnection.query<AuthorRow>(sql, [id]) //Filter response for only [id]
        .then(result => result.rows.map(row => Author.from(row))[0]); //Limit result to 1 object by index[0]
};

//Retrive authors post's by id
export async function getPostByAuthorId(authorId: number): Promise<Post[]> {
    const sql = `SELECT post.* FROM authors 
                 LEFT JOIN post ON authors.id = post.authors_id 
                 WHERE authors_id = $1`;

    try{
        const result = await dbConnection.query<Post>(sql, [authorId]); //Async/Await: Unwrap promise
        return result.rows; //return promise<Post[]>
    }catch(err){
        console.log(err);
    }
};

//Insert
export function saveAuthor(author: Author): Promise<Author> {
    const sql = `INSERT INTO authors (first_name, last_name, email) \
    VALUES ($1, $2, $3) RETURNING *`; //Returning Data after insertion 

    return dbConnection.query<AuthorRow>(sql, [ //Filter placeholder response with [firstName, lastName, email]
        author.firstName,
        author.lastName,
        author.email
    ]).then(result => result.rows.map(row => Author.from(row))[0]);
};

//Update by sql coalesce
export function patchAuthor(author: Author): Promise<Author> {
    const sql = `UPDATE authors SET \
                first_name = COALESCE($1, first_name), \
                last_name = COALESCE($2, last_name), \
                email = COALESCE($3, email) \
                WHERE id = $4 RETURNING *`;

    return dbConnection.query<AuthorRow>(sql, [
        author.firstName, 
        author.lastName, 
        author.email, 
        author.id
    ]).then(result => result.rows.map(row => Author.from(row))[0]);
};

//Delete by Id
export function deleteAuthorById(id: number): Promise<Author> {
    const sql = `DELETE FROM authors WHERE id = $1 RETURNING *`;

    return dbConnection.query<AuthorRow>(sql, [id])
        .then(result => result.rows.map(row => Author.from(row))[0]);
};