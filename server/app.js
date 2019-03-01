const express = require('express');
const app = express();
const axios = require('axios');
const morgan = require('morgan');

app.use(express.static('public'));
app.use('/:id', express.static('public'));
app.use(morgan('dev'));

app.get('/videos/:id', (req, res) => {
  const { id } = req.params;
  console.log('found id', id);
  axios.get(`http://localhost:3000/videos/${id}`)
    .then((response) => {
    console.log('Found Response', response.data);
    let data = response.data;
    res.json(data);
    })
    .catch((error) => {
      console.error('ERROR IN PROXY CALL TO VIDEOS ENDPOINT', error);
    });
});

app.get('/thumbnails/:id', (req, res) => {
  const { id } = req.params;
  console.log('found id in THUMBNAILS ROUTE', id);
  axios.get(`http://localhost:3000/thumbnails/${id}`)
  .then((response) => {
    console.log('FOUND THUMBNAILS RESPONSE', response.data);
    res.json(response.data);
  })
  .catch((error) => {
    console.error('ERROR IN PROXY CALL TO VIDEOS ENDPOINT', error);
  });
});

module.exports = app;
