import axios from "axios";
import { getAllCharacters, getCharacterDetails } from "../slices/characterSlice";

export const getCharacters = () => async(dispatch) => {
    try {
        const { data } = await axios.get('/characters')
        dispatch(getAllCharacters(data))
    }
    catch(e) {
        console.log(e)
    }
}

/* export const getDetails = (name) => async(dispatch) => {
    try {
        const { data } = await axios.get(`/characters/${name}`)
        dispatch(getCharacterDetails(data))
    }
    catch(e) {
        console.log(e)
    }
} */