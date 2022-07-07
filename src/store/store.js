import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "../compoonents/thememenu/themeSlice"
import sideReducer from "../compoonents/topnav/topnavSlice"

export const store= configureStore({
    reducer:{
        theme:themeReducer,
        side: sideReducer
    }
})