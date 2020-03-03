const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const app = express();

app.listen(3000, () => {
    console.log('servidor iniciado')
});