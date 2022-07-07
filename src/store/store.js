import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "../compoonents/thememenu/themeSlice"

export const store= configureStore({
    reducer:{
        theme:themeReducer
    }
})