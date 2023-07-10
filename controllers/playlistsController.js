const playlists = require('../data/playlists');

class playlistsController{
    getAll(req, res){
        return res.json(playlists);
    }

    getOne(req, res){
        const {id} = req.params;
        const selectedPlaylists = playlists.filter(itm => itm.id == id)[0];
        return res.json(selectedPlaylists)
    }
}


module.exports = new playlistsController();