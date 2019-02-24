const express = require('express');
const app = require('./app.js');
const port = 4003;

app.listen(port, () => console.log(`Listening on port: ${port}`));