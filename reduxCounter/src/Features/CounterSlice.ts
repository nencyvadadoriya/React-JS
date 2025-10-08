import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    count: 0
}
// export interface
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state)=>{
            state.count +=1
        },
        descrement: (state)=>{
            if(state.count > 1){
                 state.count -=1
            }
        },
        reset: (state)=>{
            state.count = 0
        },  
    }
}
);

 export const {increment , descrement, reset} = counterSlice.actions;

 export default counterSlice;