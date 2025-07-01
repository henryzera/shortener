const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute')

mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;

db.on("error", () => {console.log("houve um erro")});
db.once("open", () => {console.log("Banco carregado");});

app.use('/', linkRoute);

app.listen(port, ()=>console.log('Server running on port ' + port));