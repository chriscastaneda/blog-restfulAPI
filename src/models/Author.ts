/**Convert Postres Schema into Javascript Object */
export class Author {
    id: number;
    firstName: string;
    lastName: string;
    email: string;

    //Create new JS object from schema database
    static from(object: AuthorTable) {
        const author = new Author(
            object.id, object.first_name, object.last_name, object.email
        );
        return author;
    }

    constructor(id: number, firstName: string, lastName: string, email: string) {
        this.id;
        this.firstName;
        this.lastName;
        this.email;
    }
};

/**Template of Database Table */
interface AuthorTable {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
};