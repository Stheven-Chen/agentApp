import {createSlice} from '@reduxjs/toolkit';

interface State{
    jumlah:string;
    com:any
}

const initialState:State={
    jumlah:'',
    com:'',
}

export const comSlice = createSlice({
    name:'com',
    initialState,
    reducers:{
        setCom:(state,action)=>{
            state.jumlah=action.payload.jumlah;
            state.com=action.payload.com;
        }
    }
})

export const { setCom } = comSlice.actions;
export default comSlice.reducer;
export type ComState = ReturnType<typeof comSlice.reducer>;