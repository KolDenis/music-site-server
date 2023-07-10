const creators = require('../data/creators');

class creatorsController {
    get(req, res){
        const {query, currentPage, numberCreators} = req.query;

        let fetchedCreators = creators;

        if(query){
            fetchedCreators = fetchedCreators.filter((creator) => {
                return creator.name.toLowerCase().includes(query.toLowerCase());
            });
        }

        const numberPages = Math.ceil(fetchedCreators.length / numberCreators);

        fetchedCreators = fetchedCreators.filter((itm, index) => {
            return index >= currentPage * numberCreators - numberCreators && index < currentPage * numberCreators;
        });        

        return res.json({numberPages, creators: fetchedCreators});
    }

    getOne(req, res){
        const {id} = req.params;
        const selectedCreator = creators.filter(itm => itm.id == id)[0];
        return res.json(selectedCreator)
    }
}


module.exports = new creatorsController();