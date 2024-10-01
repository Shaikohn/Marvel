const { default: axios } = require("axios")
const { API_URL, APIKEY, HASH } = process.env

const getCharacters = async(req, res) => {
    try {
        let characters = await(axios.get(`${API_URL}/characters?ts=1&apikey=${APIKEY}&hash=${HASH}`))
        let charactersData = characters.data.data.results
        let charactersFilteredData = []

        for(let i = 0; i < charactersData.length; i++) {

            charactersData[i] = {
                name: charactersData[i].name,
                id: charactersData[i].id,
                description: charactersData[i].description,
                image: charactersData[i].thumbnail.path + "." + charactersData[i].thumbnail.extension,
            }

            charactersFilteredData.push(charactersData[i])
        }

        res.status(200).json(charactersFilteredData)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

const getCharacterById = async(req, res) => {
    const { id } = req.params
    try {
        let character = await(axios.get(`${API_URL}/characters/${id}?ts=1&apikey=${APIKEY}&hash=${HASH}`))
        let characterData = character.data.data.results
        let comics = characterData[0].comics.items
        let appearances = []

        for(let c = 0; comics.length; c++) {
            if(!comics[c]) {
                break
            } else {
            let comicLink = comics[c].resourceURI
            let comic = await(axios.get(`${comicLink}?ts=1&apikey=${APIKEY}&hash=${HASH}`))
            let comicData = comic.data.data.results

            let comicFilteredData = {
                title: comicData[0].title,
                thumbnail: comicData[0].thumbnail.path + "." + comicData[0].thumbnail.extension,
            }
            appearances.push(comicFilteredData)
            }
        }

        let characterDetails = {
            name: characterData[0].name,
            id: characterData[0].id,
            description: characterData[0].description,
            image: characterData[0].thumbnail.path + "." + characterData[0].thumbnail.extension,
            appearances,
        }
        
        res.status(200).json(characterDetails)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

module.exports = {
    getCharacters,
    getCharacterById,
}