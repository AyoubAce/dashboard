import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./features/themeSlice"
import sideReducer from "./features/topnavSlice"
import dataReducer from "./features/dataSlice"

export const store= configureStore({
    reducer:{
        theme:themeReducer,
        side: sideReducer,
        data: dataReducer,
    }
})