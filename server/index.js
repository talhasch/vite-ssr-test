const app = require('express')();

app.get('*', function (req, res) {
  // const index = fs.readFileSync('./build/index.html', 'utf-8');
  // res.send(index);

  res.send('Express on Vercel');
});

module.exports = app;
