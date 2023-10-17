const fs = require('fs');
const app = require('express')();

app.get('/u/:username', (req, res) => {
  const index = fs.readFileSync('dist/index.html', 'utf-8');
  res.send(index);
});

module.exports = app;
