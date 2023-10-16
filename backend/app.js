const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

//permite comunicação de dados via json
app.use(express.json());

const conn = require('./db/conn')

conn();

app.listen(3000, function(){
    console.log("Servidor online");
})

// BoZzpUcDh0bh0lEd