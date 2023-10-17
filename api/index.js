const app = require('express')();

app.get('/api/:username', (req, res) => {
  res.send('hello from express');
});

module.exports = app;
