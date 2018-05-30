const Router = require('express').Router();

const getHomePage = require('./getHomePage');
const { getError404 } = require('./error');

module.exports = Router
  .get('/v1/', getHomePage)
  .use(getError404);
