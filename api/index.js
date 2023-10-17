const app = require('express')();

app.get('/u/:username', (req, res) => {
  res.send('hello from express');
});

module.exports = app;
