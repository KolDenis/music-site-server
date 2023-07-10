const genres = require('../data/genres');
const musics = require('../data/musics');
const genre_music = require('../data/genre_music');

class genresController{
    get(req, res){
        const {creator} = req.query;

        if(creator){
            const musicIds = musics.map(itm => {
                if(itm.creator == creator){
                    return itm.id;
                }
            });

            const genreIds = genre_music.map(itm => {
                if(musicIds.includes(itm.musicId)){
                    return itm.genreId;
                }
            });

            const fetchedGenres = genres.filter(itm => genreIds.includes(itm.id));

            return res.json(fetchedGenres);
        }
        
        return res.json(genres);
    }
}


module.exports = new genresController();