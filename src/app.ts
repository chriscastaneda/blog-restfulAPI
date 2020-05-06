import express from 'express';
import bodyParser from 'body-parser';
import {Product} from './product';

/**initialize */
const app = express();
const port = process.env.PORT || 3000;
//app.set('port', port);//assigning port

/**Middleware(s) */
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send(ptoclient);
});

let ptoclient = getProducts();
console.log(ptoclient);

function getProducts(){
    let p = new Product();
    p.Id = "p1";
    p.Price = 200;
    p.Title = "Bat";
    return p;
}

/**Listener*/
app.listen(port, err => {
    if(err){
        return console.log(err);
    }else{
        return console.log(`Server is running on port: ${port}`);
    }
});