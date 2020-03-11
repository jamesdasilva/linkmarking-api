const express = require('express');
const LinkController = require('./controllers/link-controller');

const routes = express();

const linksController = new LinkController();

routes.post('/links', (req, res) => {
  return res.json(linksController.post(req));
});

routes.get('/links', (req, res) => {
  return res.json(linksController.getAll(req));
});

routes.get('/links/:id', (req, res) => {
  return res.json(linksController.get(req));
});

routes.put('/links/:id', (req, res) => {
  return res.json(linksController.put(req));
});

routes.delete('/links/:id', (req, res) => {
  return res.json(linksController.delete(req));
});

module.exports = routes;