import express from 'express';
import {Product} from './product';

const app = express();
const port = 3000;

/**Route */
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

/**Port*/
app.listen(port, err =>{
    if(err){
        return console.log(err);
    }else{
        return console.log(`Server is running on port: ${port}`);
    }
});