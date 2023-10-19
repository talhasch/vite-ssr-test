const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const indexRaw = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8').toString();

const indexManipulated = (() => {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const indexDom = new JSDOM(indexRaw);
  indexDom.window.document.querySelector('title').textContent = '//title-here//';
  indexDom.window.document.querySelector('meta[name="description"]').setAttribute('content', '//description-here//');
  const html = indexDom.serialize();
  indexDom.window.close();
  return html;
})();

console.log(indexManipulated);


app.get('/u/:username', (req, res) => {
  /*
  const index = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8').toString();
  const { username } = req.params;
  const tags = `<!-- meta -->
    <title>${username}'s page</title>
    <meta name="description" content="All about ${username}">
    <!-- /meta -->`;
  const modified = index.replace(/<!-- meta -->((.|\n|r)+)<!-- \/meta -->/m, tags);
  */
  res.send(indexManipulated);
});

module.exports = app;
