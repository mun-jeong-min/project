import "reflect-metadata";
import * as express from 'express'
import {createConnection} from "typeorm";
import {User} from "./entity/User";
const app = express()

createConnection().then(async connection => {
    app.listen(3000)
}).catch(error => console.log(error));
