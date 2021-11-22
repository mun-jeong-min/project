import "reflect-metadata";
import * as express from 'express'
import {createConnection} from "typeorm";
import {User} from "./entity/User";
const app = express()
import * as bodyParser from 'body-parser'
import {create, deleteAll } from "./service/service";
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));

app.get('/', async(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/index', async(req,res) => {
    create(req,res)
})
app.post('/delete', async(req,res) => {
    deleteAll(req,res)
})
createConnection().then(async connection => {
    app.listen(3000)
}).catch(error => console.log(error));