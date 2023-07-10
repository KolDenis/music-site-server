const Router = require('express');
const creatorsController = require('../controllers/creatorsController');
const creatorsRouter = Router();

creatorsRouter.get('/', creatorsController.get);
creatorsRouter.get('/:id', creatorsController.getOne);

module.exports = creatorsRouter;