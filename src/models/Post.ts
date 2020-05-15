/**Convert Postres Schema into Javascript Object */
export class Post {
    id: number;
    title: string;
    body: string;
    published: Date;
    authorId: number;

    //Project constructor
    constructor(id: number, title: string, published: Date){
        this.id = id;
        this.title = title;
        this.published = published;
    };
};