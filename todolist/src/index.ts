import "reflect-metadata";
import * as express from 'express'
import {createConnection} from "typeorm";
import {User} from "./entity/User";
const app = express()
import * as bodyParser from 'body-parser'
import { test } from "./service/service";
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', async(req,res) => {
    test(req,res)
})
createConnection().then(async connection => {
    app.listen(3000)
}).catch(error => console.log(error));