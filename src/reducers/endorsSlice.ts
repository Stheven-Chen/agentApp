import {createSlice} from '@reduxjs/toolkit'

interface State {
    endors:any;
    nPolis:string;
    insuredName:string;
    periode:string;
    eDate:string;
    polis:string;
    okupasi:string;
    jEndors:string;
    before:string;
    after:string;
    keterangan:string;
    COB:string;
    type:string;
    addedDate:string;
}

const initialState:State = {
    endors:'',
    nPolis:'',
    insuredName:'',
    periode:'',
    eDate:'',
    polis:'',
    okupasi:'',
    jEndors:'',
    before:'',
    after:'',
    keterangan:'',
    COB:'',
    type:'',
    addedDate:''
}

export const endorsSlice = createSlice({
    name: 'endors',
    initialState,
    reducers: {
        setEndors: (state, action) => {
            state.endors = action.payload.endors;
            state.nPolis = action.payload.nPolis;
            state.insuredName = action.payload.insuredName;
            state.periode = action.payload.periode;
            state.eDate = action.payload.eDate;
            state.polis = action.payload.polis;
            state.okupasi = action.payload.okupasi;
            state.jEndors = action.payload.jEndors;
            state.before = action.payload.before;
            state.after = action.payload.after;
            state.keterangan = action.payload.keterangan;
            state.COB = action.payload.COB;
            state.type = action.payload.type;
            state.addedDate = action.payload.addedDate;
        }
    }
});

export const { setEndors } = endorsSlice.actions;
export default endorsSlice.reducer;
export type EndorsState = ReturnType<typeof endorsSlice.reducer>;