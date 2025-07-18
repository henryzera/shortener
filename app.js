const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');
const path = require('path');

app.use(express.urlencoded({ extended: true })); // para dados de formulário (HTML)
app.use(express.json()); // para dados em JSON (APIs, fetch, axios etc.)

mongoose.connect('mongodb://localhost/newlinks');

let db = mongoose.connection;

db.on("error", () => {console.log("houve um erro")});
db.once("open", () => {console.log("Banco carregado");});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(port, ()=>{
    console.log('Server running on port ' + port)
});
