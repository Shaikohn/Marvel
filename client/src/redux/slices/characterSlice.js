import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "characters",
    initialState: {
        allCharacters: [],
        characterDetails: {},
    },
    reducers: {
        getAllCharacters: (state, action) => {
            state.allCharacters = action.payload
        },
        getCharacterDetails: (state, action) => {
            state.characterDetails = action.payload
        },
        clearCharacterDetails: (state) => {
            state.characterDetails = {}
        },
    }
})

export const { getAllCharacters, getCharacterDetails, clearCharacterDetails } = characterSlice.actions
export default characterSlice.reducer