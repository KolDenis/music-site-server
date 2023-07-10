const Router = require('express');
const creatorsRouter = require('./creatorsRouter');
const musicsRouter = require('./musicsRouter');
const playlistsRouter = require('./playlistsRouter');
const genresRouter = require('./genresRouter');

const router = Router();

router.use('/musics', musicsRouter);
router.use('/creators', creatorsRouter);
router.use('/playlists', playlistsRouter);
router.use('/genres', genresRouter);

module.exports = router;