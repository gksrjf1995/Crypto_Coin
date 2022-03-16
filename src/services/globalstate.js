import { createSlice } from "@reduxjs/toolkit";

const initial = {
    activemenu : false,
}

export const styleSlice = createSlice({
    name : "style",
    initialState : initial ,
    reducers  :{
        stateopposite : (state , action) => {
            state.activemenu = action.payload
        } 
    }
});

export const  { stateopposite } = styleSlice.actions

export default styleSlice.reducer