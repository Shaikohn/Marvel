import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../slices/characterSlice";

export default configureStore({
    reducer: {
        characters: characterSlice,
    }
})