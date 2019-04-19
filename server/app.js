const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use('/:id', express.static('public'));
app.use(cors());

app.all('*', (req, res) => { res.redirect('http://localhost:3000/1000000')})

module.exports = app;
