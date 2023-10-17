const app = require('express')();

app.get('/u/', (req, res) => {
  res.send('hello from express');
});

module.exports = app;
