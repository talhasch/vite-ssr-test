const express = require('express');

const PORT = process.env.PORT || 8001;
const app = express();

app.get('*', function (req, res) {
  // const index = fs.readFileSync('./build/index.html', 'utf-8');
  // res.send(index);

  res.send('Express on Vercel');
});

// express.static(path.resolve(__dirname, '.', 'assets'), { maxAge: '30d' })
app.listen(PORT, () => {
  // console.log(`⚡️[server]: Server is running at http://127.0.0.1:${PORT}`);
});

module.exports = app;
