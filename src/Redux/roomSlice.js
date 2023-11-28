import { createSlice } from "@reduxjs/toolkit";

const roomSlice=createSlice({
    name:'room',
    initialState:[],
    reducers:{
        addToRoom:(state,action)=>{
            state.push(action.payload)
        },
        deleteRoom:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
     
        editroom:(state,action)=>{
            const {id,name,place,address,mobile}=action.payload;
            const data=state.find((item)=>item.id==id)
            if(data){
                data.name=name;
                data.place=place;
                data.address=address;
                data.mobile=mobile;
            };
        },
        
    }
})

export const {addToRoom ,deleteRoom,editroom}=roomSlice.actions;
export default roomSlice.reducer