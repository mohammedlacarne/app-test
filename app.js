// Get dependencies
const express = require('express');
require('dotenv').config();
const http = require('http');
// Include the cluster module
const cluster = require('cluster');
// Include configuration files



const router = express();
router.get('/', async(req, res, next) =>{
  res.send('hello')
})
const port = process.env.SERVER_PORT || '4000';
router.set('port', port);
const server = http.createServer(router);
/**
  * Listen on provided port, on all network interfaces.
*/
server.listen(port, function(error) {
    if (error) {
      console.log("Unable to listen on port", port, error);
      return;}
      console.log("listenig on port ", port)
    });


