const Router = require('express');
const playlistsController = require('../controllers/playlistsController');
const playlistsRouter = Router();

playlistsRouter.get('/', playlistsController.getAll);
playlistsRouter.get('/:id', playlistsController.getOne);

module.exports = playlistsRouter;