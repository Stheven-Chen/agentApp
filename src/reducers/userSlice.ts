import {createSlice} from '@reduxjs/toolkit'

const initialState:{username:any; nama:any} = {
    username:'',
    nama:'',
}

export const userSlice = createSlice({
    name:"username",
    initialState,
    reducers:{
        login:(state, action)=>{
            state.username = action.payload.username;
            state.nama = action.payload.nama;
        },
        logout:(state)=>{
            state.username="";
            state.nama="";
        }
    }
}) 

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;

export type RootState = ReturnType<typeof userSlice.reducer>;