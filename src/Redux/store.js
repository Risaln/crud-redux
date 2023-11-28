import { configureStore } from "@reduxjs/toolkit";
import roomSlice, { addToRoom } from "./roomSlice";


const store = configureStore({
    reducer:{

       addToRoomReducer:roomSlice

    }
})

export default store