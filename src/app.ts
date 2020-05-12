import express from 'express';
import bodyParser from 'body-parser';
import {Product} from './product';
import { dbConnection } from './daos/db';

/**initialize */
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);//set port globally

/**Middleware */
app.use(bodyParser.json());

/**Routers */

/**SIGINT Listener */
//Releases AWS db connection to server with Ctrl+C prior to app being stopped
process.on('SIGINT', () => {
    dbConnection.end().then(() => {
        console.log('Database pool closed');
    });
});

/**Port Listener*/
app.listen(port, err => {
    if(err){
        return console.log(err);
    }else{
        return console.log(`Server is running on http://localhost: ${port}`);
    }
});