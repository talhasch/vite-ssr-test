const app = require('express')();

app.get('/api/(.*)', (req, res) => {
  res.send('hello from express');
});

module.exports = app;
