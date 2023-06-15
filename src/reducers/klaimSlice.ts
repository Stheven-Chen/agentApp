import {createSlice} from '@reduxjs/toolkit';


interface State{
    nPolis:string;
    insuredName:string;
    periode:string;
    polis:string;
    okupasi:string;
    dol:string;
    COB:string,
    type:string,
    kronologi:string;
    klaim:any
    addedDate:string;
}

const initialState:State={
    addedDate:'',
    nPolis:'',
    insuredName:'',
    periode:'',
    polis:'',
    okupasi:'',
    dol:'',
    kronologi:'',
    klaim:'',
    COB:'',
    type:'',
}

export const klaimSlice=createSlice({
    name:'klaim',
    initialState,
    reducers:{
        setKlaim:(state, action)=>{
            state.addedDate=action.payload.addedDate;
            state.nPolis=action.payload.nPolis;
            state.insuredName=action.payload.insuredName;
            state.periode=action.payload.periode;
            state.polis=action.payload.polis;
            state.okupasi=action.payload.okupasi;
            state.dol=action.payload.dol;
            state.kronologi=action.payload.kronologi;
            state.klaim=action.payload.klaim;
            state.COB=action.payload.COB;
            state.type=action.payload.type;
        }
    }
}) 

export const { setKlaim } = klaimSlice.actions;
export default klaimSlice.reducer;
export type KlaimState = ReturnType<typeof klaimSlice.reducer>;