const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use('', express.static(__dirname + '/public'));

app.listen( port, () => {
    console.log('App is running in port '+ port);
})