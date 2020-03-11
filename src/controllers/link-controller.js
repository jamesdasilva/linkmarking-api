module.exports = class LinkController {
  constructor() {

  }
  get() {
    return { data: 'test get' };
  }
  post() {
    return { data: 'test post' };
  }
  put() {
    return { data: 'test put' };
  }
  delete() {
    return { data: 'test delete' };
  }
};