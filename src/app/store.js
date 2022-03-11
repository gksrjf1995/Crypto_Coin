import { configureStore } from "@reduxjs/toolkit"
import {cyptoAPI} from "../services/cyptoAPI"
import {cryptoNewsAPI} from "../services/cryptoNews"


export default configureStore({
    reducer : {
        [cyptoAPI.reducerPath ] : cyptoAPI.reducer,
        [cryptoNewsAPI.reducerPath] : cryptoNewsAPI.reducer,
    }
});