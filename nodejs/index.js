'use strict';

// Imports
const express = require('express');
const bodyParser = require('body-parser');

// Config
const PORT = 8000;

// Server https://expressjs.com/en/guide/routing.html
const app = express();

app.use(bodyParser.json());

//Receive message from Smooch via a webhook
app.post('/message',function(req, res){
	console.log('webhook PAYLOAD:\m', JSON.stringify(req.body, null, 4));
});

// Listen on port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
