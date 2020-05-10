import express from 'express';
import bodyParser from 'body-parser';
import {Product} from './product';

/**initialize */
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);//set port globally

/**Middleware */
app.use(bodyParser.json());

/**Routers */


/**Port Listener*/
app.listen(port, err => {
    if(err){
        return console.log(err);
    }else{
        return console.log(`Server is running on http://localhost: ${port}`);
    }
});