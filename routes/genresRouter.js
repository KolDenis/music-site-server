const Router = require('express');
const genresController = require('../controllers/genresController');
const genresRouter = Router();

genresRouter.get('/', genresController.get);

module.exports = genresRouter;