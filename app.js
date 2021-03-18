const http = require('http')
const express = require("express")
const router = express()
const dotenv = require('dotenv')
dotenv.config()



router.get('/', async(req, res, next) =>{
  res.send('hello')
})
const port = process.env.SERVER_PORT || '4000';
router.set('port', port);
const server = http.createServer(router);
/**
  * Listen on provided port, on all network interfaces.
*/
server.listen(port);
