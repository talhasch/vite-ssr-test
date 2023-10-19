const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const indexRaw = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8').toString();

const TITLE_SELECTOR =  '//title-here//';
const DESCRIPTION_SELECTOR = '//description-here//';
const IMAGE_SELECTOR = '//image-here//';

const indexManipulated = (() => {
  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const indexDom = new JSDOM(indexRaw);
  indexDom.window.document.querySelector('title').textContent = TITLE_SELECTOR;
  indexDom.window.document.querySelector('meta[name="description"]').setAttribute('content', DESCRIPTION_SELECTOR);
  const html = indexDom.serialize();
  indexDom.window.close();
  return html;
})();

const preparePage = (title, description, image) => {
  return indexManipulated.replace(TITLE_SELECTOR, title).replace(DESCRIPTION_SELECTOR, description).replace(IMAGE_SELECTOR, image);
}


app.get('/u/:username', (req, res) => {
  const { username } = req.params;
  const html = preparePage(`@${username}'s page`, `All about ${username}`, '');
  res.send(html);
});

module.exports = app;
