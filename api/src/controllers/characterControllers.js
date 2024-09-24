const { default: axios } = require("axios")
const { API_URL, APIKEY, HASH } = process.env

const getCharacters = async(req, res) => {
    try {
        let characters = await(axios.get(`${API_URL}/characters?ts=1&apikey=${APIKEY}&hash=${HASH}`))
        let charactersData = characters.data.data.results
        let charactersFilteredData = []

        for(let i = 0; i < charactersData.length; i++) {
            let appearances = []

            let comics = charactersData[i].comics.items

            for(let c = 0; appearances.length < 7; c++) {
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

            /* let comics = await(axios.get(`${comicsLink}?ts=1&apikey=${APIKEY}&hash=${HASH}`)) */
            /* let comicsData = comics.data.data.results */

            /* if(comicsData[0].title === undefined) {
                
            } */

            /* comicFilteredData = {
                title: comicsData[0].title,
                thumbnail: comicsData[0].thumbnail.path + "." + comicsData[0].thumbnail.extension,
            }
            appearances.push(comicFilteredData)
            console.log(appearances) */

            charactersData[i] = {
                name: charactersData[i].name,
                id: charactersData[i].id,
                description: charactersData[i].description,
                image: charactersData[i].thumbnail.path + "." + charactersData[i].thumbnail.extension,
                appearances,
            }

            charactersFilteredData.push(charactersData[i])
        }

        res.status(200).json(charactersFilteredData)
    } catch(e) {
        res.status(500).json({msg: String(e)})
    }
}

module.exports = {
    getCharacters,
}