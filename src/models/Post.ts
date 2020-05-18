/**Convert Postres Schema into Javascript Object */
export class Post {
    id: number;
    title: string;
    body: string;
    publish_date: Date;
    authors_id: number;

    //Create new JS instance object from database schema
    static from(object: PostRow): Post {
        const post = new Post(
            object.id, object.title, object.body, object.publish_date, object.authors_id
        );
        return post;
    };

    //Project constructor
    constructor(id: number, title: string, body: string, publish_date: Date, authors_id: number){
        this.id = id;
        this.title = title;
        this.body = body;
        this.publish_date = publish_date;
        this.authors_id = authors_id;
    };
};

/**Template object of Database Table */
export interface PostRow {
    id: number;
    title: string;
    body: string;
    publish_date: Date;
    authors_id: number;
};