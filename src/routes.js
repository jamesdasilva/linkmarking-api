const express = require('express');
const LinkController = require('./controllers/link-controller');

const routes = express();

const linksController = new LinkController();

routes.get('/links', (req, res) => {
  return res.json(linksController.get());
});

routes.post('/links', (req, res) => {
  return res.json(linksController.post());
});

routes.put('/links', (req, res) => {
  return res.json(linksController.put());
});

routes.delete('/links', (req, res) => {
  return res.json(linksController.delete());
});

module.exports = routes;