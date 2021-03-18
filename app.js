const http = require('http')
const express = require("express")
const router = express()
dotenv = require('dotenv')
const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)



router.get('/', async(req, res, next) =>{
  res.send('hello')
})
const port = process.env.PORT || '4000';
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
