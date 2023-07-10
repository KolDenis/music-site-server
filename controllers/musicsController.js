const musics = require('../data/musics');
const music_playlist = require('../data/music-playlist');
const genre_music = require('../data/genre_music');


class musicsController{
    get(req, res){
        const {playlist, creator, query, genre, currentPage, numberTracks} = req.query;

        let fetchedMusic = musics;
        if(creator){
            fetchedMusic = musics.filter(itm => itm.creator == creator);
        }
        else if(playlist){
            const musicIds = music_playlist.map(itm => {
                if(playlist == itm.playlistId)
                    return itm.musicId;
            });

            fetchedMusic = musics.filter(itm => musicIds.includes(itm.id));
        }
        else if(query){
            fetchedMusic = musics.filter((music) => {
                return music.name.toLowerCase().includes(query.toLowerCase());
            });
        }
        else if(genre)
        {
            const musicIds = genre_music.map(itm => {
                if(genre == itm.genreId)
                    return itm.musicId;
            });

            fetchedMusic = musics.filter(itm => musicIds.includes(itm.id));
        }

        const numberFetchedTracks = fetchedMusic.length;
        const numberPages = Math.ceil(fetchedMusic.length / numberTracks);

        fetchedMusic = fetchedMusic.filter((itm, index) => {
            return index >= currentPage * numberTracks - numberTracks && index < currentPage * numberTracks;
        });        

        return res.json({numberPages, numberTracks: numberFetchedTracks, tracks: fetchedMusic});
    }

    getOne(req, res){
        const {id} = req.params;
        const selectedMusic = musics.filter(itm => itm.id == id)[0];
        return res.json(selectedMusic);
    }
}


module.exports = new musicsController();