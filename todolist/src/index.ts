import "reflect-metadata";
import * as express from 'express'
import {createConnection} from "typeorm";
const app = express()

app.use('/' , express.static(__dirname + '/public'));

createConnection().then(async connection => {
    app.listen(3000)
}).catch(error => console.log(error));