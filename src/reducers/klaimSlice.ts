import {createSlice} from '@reduxjs/toolkit';


interface State{
    nPolis:any;
    insuredName:any;
    periode:any;
    polis:any;
    okupasi:any;
    dol:any;
    COB:any,
    type:any,
    kronologi:any;
    klaim:any
    addedDate:any;
    status:any
}

const initialState:State={
    addedDate:[],
    nPolis:[],
    insuredName:[],
    periode:[],
    polis:[],
    okupasi:[],
    dol:[],
    kronologi:[],
    klaim:[],
    COB:[],
    type:[],
    status:[]
}

export const klaimSlice=createSlice({
    name:'klaim',
    initialState,
    reducers:{
        setKlaim:(state, action)=>{
            state.addedDate.push(action.payload.addedDate);
            state.nPolis.push(action.payload.nPolis);
            state.insuredName.push(action.payload.insuredName);
            state.periode.push(action.payload.periode);
            state.polis.push(action.payload.polis);
            state.okupasi.push(action.payload.okupasi);
            state.dol.push(action.payload.dol);
            state.kronologi.push(action.payload.kronologi);
            state.klaim.push(action.payload.klaim);
            state.COB.push(action.payload.COB);
            state.type.push(action.payload.type);
            state.status.push(action.payload.status);
        }
    }
}) 

export const { setKlaim } = klaimSlice.actions;
export default klaimSlice.reducer;
export type KlaimState = ReturnType<typeof klaimSlice.reducer>;