const express = require('express');
const app = express();
const bodyParser = require('body-parser');//bake incoming request from client


const port = 3000;
const routes = require('./routes/routes');//Routes for quotes
const db = require('./dbconfig/db');//configuration to MYSQL database

app.use(bodyParser.json());//Only json request used at the moment

routes(app, db);

// Server listening on port 3000
app.listen(port,function(){
	console.log(`Server running on port ${port}`)
});