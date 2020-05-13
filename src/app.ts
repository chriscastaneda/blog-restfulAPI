import express from 'express';
import bodyParser from 'body-parser';
import { dbConnection } from './daos/db';
import { authorRouter } from './routers/author-router';

/**initialize */
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);//set port globally

/**Middleware */
app.use(bodyParser.json());

/**Routers */
app.use('/authors', authorRouter);

/**Pool Connection error handle */
process.on('unhandledRejection', () => {
    dbConnection.end().then(() => {
        console.log('Database pool closed');
    });
});

/**Port Listener*/
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});