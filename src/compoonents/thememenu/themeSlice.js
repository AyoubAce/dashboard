import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mode: "theme-dark",
    color:"theme-color-purple"
}
const themeSlice= createSlice({
    name:"theme",
    initialState,
    reducers:{
        setMode: (state,action)=>{
            state.mode=action.payload
        },
        setColor:(state,action)=>{
            state.color= action.payload
        }
    }
})

export const {setColor,setMode}= themeSlice.actions
export default themeSlice.reducer