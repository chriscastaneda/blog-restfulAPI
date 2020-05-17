import { Comment } from '../models/Comment';
import * as commentDao from '../daos/comment-dao';
import { Post } from '../models/Post';
/**Application Logic */


//Store new JS Comment Object in array
export function getAllComments(): Promise<Comment[]> { //Promise<Comment[]> returning promise from doa's
    //Apply internal logic here(user privalleges/rules/authentication)
    return commentDao.getAllComments();
};

/*Reference comment object by database id
export function getCommentById(id: number): Promise<Comment> {
    //Apply internal logic here(user privalleges/rules/authentication)
    return commentDao.getAllCommentById(id);
};*/
//!
//Reference comment object by database post id
export function getAllCommentsByPostId(postId: number): Promise<Post[]> {
    return commentDao.getAllCommentsByPostId(postId);
};

//Create database object
export function saveComment(comment: any): Promise<Comment> {
    const newComment = new Comment ( //create object from service request
        undefined, //set undefined id to prevent sql injection
        comment.comment, 
        comment.published,
        comment.postId,
        comment.authorId
    )

    if(comment.comment && comment.published && comment.postId && comment.authorId){ //Data is valid - submit to DAO
        return commentDao.saveComment(newComment);
    }else{
        //console.log('Comment invalid');
        return new Promise((resolve, reject) => reject(422));
    }
};

//Update by object properties
export function patchComment(properties: any): Promise<Comment> {
    const comment = new Comment(
        properties.id,
        properties.comment, 
        properties.published, 
        properties.postId,
        properties.authorId
    );

    if(!comment.id){
        throw new Error('400');
    }else{
        return commentDao.patchComment(comment);
    }
};

//Delete by Id
export function deleteCommentById(id: number): Promise<Comment> {
    return commentDao.deleteCommentById(id);
};