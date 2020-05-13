import { dbConnection} from '../daos/db';
import { Author, AuthorRow } from '../models/Author';
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

//Insert
export function saveAuthor(author: Author): Promise<Author> {
    const sql = `INSERT INTO authors (first_name, last_name, email) \
    VALUES ('$1', '$2', '$3') RETURNING *`; //Returning Data after insertion 

    return dbConnection.query<AuthorRow>(sql, [ //Filter response for only [firstName, lastName, email]
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