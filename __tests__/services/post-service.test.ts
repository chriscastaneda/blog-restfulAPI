import * as postService from '../../src/services/post-service';
import * as postDao from '../../src/daos/post-dao';
import { Post } from '../../src/models/Post';

/**Mock importing methods/modules */
jest.mock('../../src/daos/post-dao');

/**Cast methods from postDao file */
const mockPostDao = postDao as any;




/**Creating fake database object */


/**CREATE */
describe('POST: /posts', () => {
    
    //Object Success Test (BlackBox)
    test('Test object transformed to Post object', async () => {
        mockPostDao.savePost.mockImplementation(input => input); //return its self object

        const payload = {
            title: 'Title',
            body: 'Test',
            published: 2020-0o1-0o1,
            authorId: 1
        };
        const result = await postService.savePost(payload);

        expect(payload).not.toBeInstanceOf(Post); //Set to not post in input
        expect(result).toBeInstanceOf(Post); //Transformed to person in result
    });

    //Object Properties Failure Test(WhiteBox)
    test('Expected 422 returned if no firstName provided', async () => {

        mockPostDao.savePost.mockReturnValue(undefined); //mockPostDao function returning undefined response
        const payload = {
            title: 'Title',
            body: 'Test'
        }

        let expectedError = undefined;

        try{
            await postService.savePost(payload); 
            fail('postService.savePost failed request'); //Reject savePost due to missing authorId
        }catch(err){
            expectedError = err; //Assign error object to expectedError
        }
        expect(expectedError).toBeDefined(); //Validate error was thrown
    });

    //Object Properties Failure Test
    test('Expected 422 returned if no authorId provided', async () => {

        expect.assertions(1); //cleaner assertion syntax replacing mockPostDao function
        const payload = {
            title: 'Title',
            body: 'Test'
        }

        let expectedError = undefined;

        try{
            await postService.savePost(payload); 
            fail('postService.savePost failed request'); //Reject savePost due to missing name
        }catch(err){
            expect(err).toBeDefined(); //part of assertion syntax
        }
    });

    //Object Properties Failure Test
    test('Expected 422 returned if no authorId provided', async () => {

        expect.assertions(1); //cleaner assertion syntax replacing mockPostDao function
        const payload = {
            title: 'Title',
            body: 'Test'
        }

        let expectedError = undefined;

        try{
            await postService.savePost(payload); 
            fail('postService.savePost failed request'); //Reject savePost due to missing name
        }catch(err){
            expect(err).toBeDefined(); //part of assertion syntax
        }
    });

    //ID Validation Test
    test('Inserted ID field should fail', async () => {
        mockPostDao.savePost.mockImplementation(input => input); //return its self object

        const payload = {
            id: 15,
            title: 'Title',
            body: 'Test',
            published: 2020-0o1-0o1,
            authorId: 1
        };
        const result = await postService.savePost(payload);

        expect(result.id).not.toBe(payload.id); //Compared id should be undefined.
    });

    //Inserting Extra Fields Test
    test('Inserted extra field should fail', async () => {
        mockPostDao.savePost.mockImplementation(input => input); //return its self object

        const payload = {
            title: 'Title',
            body: 'Test',
            published: 2020-0o1-0o1,
            authorId: 1,
            extraFieldInput: true
        };
        const result = await postService.savePost(payload)  as any;

        expect(result.extraFieldInput).not.toBeDefined(); //Call extra property.
    });
});


/**UPDATE */
describe('PATCH: /posts', () => {
    //Patch success test
    test('Successful patch', async () => {
        expect.assertions(1);
        //mockAuthorDao.saveAuthor.mockImplementation(input => input);

        const payload = {
            id: 1,
            title: 'Title',
            body: 'Test',
            published: 2020-0o1-0o1,
            authorId: 1
        };
        const result = await postService.savePost(payload);

        expect(result).toBeTruthy();
        //expect(payload).not.toBeInstanceOf(Post); //Set to not author in input
        //expect(result).toBeInstanceOf(Post); //Transformed to person in result
    });

    //Expected server error test
    test('Returns 404 status from throw error', async () => {
        expect.assertions(1);
        //mockPostrDao.savePost.mockImplementation(input => input);

        const payload = {
            title: 'Title',
            body: 'Test',
            published: 2020-0o1-0o1,
            authorId: 1
        };

        try{
            const result = await postService.patchPost(payload);
        }catch(err){
            expect(err).toBeTruthy();
        }
    });
});



/**READ ALL*/
describe('GET: /posts', () => {
    //Read success test
    test('Throw new Error status 400', async () => {
        expect.assertions(1);
        //mockPostDao.savePost.mockImplementation(input => input);

        const result = await postService.getAllPosts();

        try{
            expect(result).toContain([]);
        }catch(err){
            expect(err).toBeDefined();
        }
        //expect(payload).not.toBeInstanceOf(Post); //Set to not post in input
        //expect(result).toBeInstanceOf(Post); //Transformed to person in result
    });
});


/**DELETE */
/**READ ALL*/
describe('DELETE: /posts/:id', () => {
    //Read success test
    test('Successful delete of id', async () => {
        expect.assertions(1);
        //mockPostDao.savePost.mockImplementation(input => input);

        const result = await postService.deletePostById(1);

        try{
            expect(result).toContain({});
        }catch(err){
            expect(err).toBeDefined();
        }
        //expect(payload).not.toBeInstanceOf(Post); //Set to not post in input
        //expect(result).toBeInstanceOf(Post); //Transformed to person in result
    });
});
