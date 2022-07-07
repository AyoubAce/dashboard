import { createSlice } from "@reduxjs/toolkit";


const initialState={
    toggle: false
}
const sideSlice= createSlice({
    name:"side",
    initialState,
    reducers:{
        toggleSidebar: (state,action)=>{
            state.toggle=action.payload
        },
      
    }
})

export const {toggleSidebar}= sideSlice.actions
export default sideSlice.reducer