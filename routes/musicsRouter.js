const Router = require('express');
const musicsController = require('../controllers/musicsController');
const musicsRouter = Router();

musicsRouter.get('/', musicsController.get);
musicsRouter.get('/:id', musicsController.getOne);

module.exports = musicsRouter;