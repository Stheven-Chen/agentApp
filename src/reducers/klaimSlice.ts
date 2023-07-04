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
    status:any;
    agentName:any
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
    status:'',
    agentName:''
}

export const klaimSlice=createSlice({
    name:'klaim',
    initialState,
    reducers:{
        setKlaim:(state, action)=>{
            state.addedDate = action.payload.addedDate;
            state.nPolis = action.payload.nPolis;
            state.insuredName = action.payload.insuredName;
            state.periode = action.payload.periode;
            state.polis = action.payload.polis;
            state.okupasi = action.payload.okupasi;
            state.dol = action.payload.dol;
            state.kronologi = action.payload.kronologi;
            state.klaim = action.payload.klaim;
            state.COB = action.payload.COB;
            state.type = action.payload.type;
            state.status = action.payload.status;
            state.agentName = action.payload.agentName;

            fetch('https://agentserver-production.up.railway.app/newklaim', {
        method:"POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(state),
      })
        }

    }
}) 

export const { setKlaim } = klaimSlice.actions;
export default klaimSlice.reducer;
export type KlaimState = ReturnType<typeof klaimSlice.reducer>;