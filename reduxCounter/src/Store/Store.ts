import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/CounterSlice";

export  const store = configureStore({
    reducer:counterSlice.reducer
})

export type RooteState= ReturnType<typeof store.getState>