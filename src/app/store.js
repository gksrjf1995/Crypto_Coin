import { configureStore } from "@reduxjs/toolkit"
import {cyptoAPI} from "../services/cyptoAPI"
import {coinNews} from "../services/cryptoNews"
import styleSlice from "../services/globalstate"

export const store = configureStore({
    reducer : {
        [cyptoAPI.reducerPath ] : cyptoAPI.reducer,
        [coinNews.reducerPath] : coinNews.reducer,
        stateopposite : styleSlice,
    }
});