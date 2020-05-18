import { dbConnection } from '../daos/db';
import { Comment, CommentRow } from '../models/Comment';
import { Post } from '../models/Post';
/**Database query logic */


//Retrieve all
export function getAllComments(): Promise<Comment[]> { //Promise<Comment[]> returning promise
    const sql = 'SELECT * FROM commenting'; //Query database
    
    return dbConnection.query<CommentRow>(sql, []).then(result => { //return promise type as QueryResult<CommentRow>
        const queryrows: CommentRow[] = result.rows; //extract rows from query response
        const comments: Comment[] = queryrows.map(row => Comment.from(row)); //convert sql row data format into comment.ts(static method) JS objects
        return comments; //return promise<Comment[]>
    });
};

//Retrieve by post Id
export async function getAllCommentsByPostId(postId: number): Promise<Post[]> {
    const sql = `SELECT \
	            posts.title, \
                commenting.*, \
	            authors.first_name, authors.last_name \
                FROM posts \
                LEFT JOIN commenting ON posts.id = commenting.post_id \
                LEFT JOIN authors ON commenting.authors_id = authors.id \
                WHERE posts.id = $1`;
                 
    const result = await dbConnection.query<Post>(sql, [postId]); //Async/Await: Unwrap promise
    return result.rows; //return promise<Post[]>
};


//Validation interface
interface Exists {
    exists: boolean;
};
//Valid comment by id in database
export async function commentExists(commentId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM commenting WHERE id = $1)`; //Validate user via database by boolean
    
    const result = await dbConnection.query<Exists>(sql, [commentId]);
    return result.rows[0].exists; //if boolean: 0, user exists
};

//Insert
export function saveComment(comment: Comment): Promise<Comment> {
    const sql = `INSERT INTO commenting (comment_body, publish_date, post_id, authors_id) \
    VALUES ($1, $2, $3, $4) RETURNING *`; //Returning Data after insertion 

    return dbConnection.query<CommentRow>(sql, [ //Filter placeholder response with [body, published, authorId, postId]
        comment.comment,
        comment.published,
        comment.postId,
        comment.authorId
    ]).then(result => result.rows.map(row => Comment.from(row))[0]);
};

//Update by sql coalesce
export function patchComment(comment: Comment): Promise<Comment> {
    const sql = `UPDATE commenting SET \
                body = COALESCE($2, body), \
                publish_date = COALESCE($3, publish_date), \
                authors_id = COALESCE($4, authors_id), \
                post_id = COALESCE($5, post_id) \
                WHERE id = $1 RETURNING *`; 

    return dbConnection.query<CommentRow>(sql, [
        comment.id,
        comment.comment,
        comment.published,
        comment.postId,
        comment.authorId
    ]).then(result => result.rows.map(row => Comment.from(row))[0]);
};

//Delete by Id
export function deleteCommentById(id: number): Promise<Comment> {
    const sql = `DELETE FROM commenting WHERE id = $1 RETURNING *`;

    return dbConnection.query<CommentRow>(sql, [id])
        .then(result => result.rows.map(row => Comment.from(row))[0]);
};