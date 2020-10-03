const games = require( '../model/atariGames.json' )

const getAll = ( req, res ) => {
        console.log( `A url no navegador é jogos ${req.url} ` )
    res.status(200).send(games)
}


const getAllNames = ( req, res ) => {
        const names = games.map((game) => game.name)
        console.log( `A url no navegador é jogos${req.url}` )
    res.status(200).send(names)
} 


const getByID = ( req, res ) => {
        const id = req.params.id
        console.log( `A url no navegador é jogos${req.url}` )
        const filteredGame = games.find((game) => game.id == id)
res.status(200).send(filteredGame)
}


const getByGenre = ( req, res ) => {
    const genre = req.params.genre
    console.log( `A url no navegador genero é jogos${req.url}` )
    const filteredGames = games.filter((game) => game.genre == genre)
    const filteredGame = filteredGames.map((game) => (
        { 
            "nome do jogo": game.name,
            "ano de lançamento": game.release
        }
    ))
    res.status(200).send(filteredGame)
}
 
module.exports = { getAll, getByID, getAllNames, getByGenre }