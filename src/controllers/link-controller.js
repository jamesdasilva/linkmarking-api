module.exports = class LinkController {
  constructor() {

  }
  post(req) {
    return { link: req.body };
  }
  get(res) {
      return { link: { id: res.params.id } };
  }
  getAll(res) {
    return { links: [] };
  }
  put(res) {
    return { link: { id: res.params.id } };
  }
  delete(res) {
    return { link: { id: res.params.id } };
  }
};