const app = require('express')();

app.get('/apix', (req, res) => {
  res.send('hello from express');
});

module.exports = app;
