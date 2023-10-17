const fs = require('fs');
const path = require('path');
const app = require('express')();

app.get('/u/:username', (req, res) => {
  const index = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8');
  const {username} = req.params;
  const tags = `
    <!-- meta -->
    <title>${username}'s page</title>
    <meta name="description" content="All about ${username}">
    <!-- /meta -->
  `;
  const modified = index.replace(/<!-- meta -->((.|\n|r)+)<!-- \/meta -->/m, tags);
  res.send(modified);
});

module.exports = app;
