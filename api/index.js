const fs = require('fs');
const path = require('path');
const app = require('express')();

app.get('/u/:username', (req, res) => {
  const index = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8');
  res.send(index);
});

module.exports = app;
