import { dbConnection} from '../daos/db';
import { Author, AuthorRow } from '../models/Author';
/**Database query logic */


export function getAllAuthors(): Author[] {
    const sql = 'SELECT * FROM authors'; //Query database
    dbConnection.query<AuthorRow>(sql, []).then(result => { //return promise type as QueryResult<AuthorRow>
        const queryrows: AuthorRow[] = result.rows; //extract row from query response
        const author: Author[] = queryrows.map(row => Author.from(row)) //convert row data format to author JS objects
    });
};

export function getAllAuthorById(id: number): Author {
    //PASS
};

export function saveAuthor(Author: any) Author {
    //PASS
};

//1:12:52