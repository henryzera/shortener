const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;

db.on("error", () => {console.log("houve um erro")});
db.once("open", () => {console.log("Banco carregado");});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(port, ()=>{
    console.log('dirname: ', __dirname);
    console.log('Server running on port ' + port)
});