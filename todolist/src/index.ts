import "reflect-metadata";
import * as express from 'express'
import {createConnection} from "typeorm";
import {create,deleteAll } from "./service/service";
import * as bodyParser from 'body-parser'
const app = express()
const router = require('./service/service')
app.use(bodyParser.urlencoded({extended:true}))

app.use('/public' , express.static(__dirname + '/public'))
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