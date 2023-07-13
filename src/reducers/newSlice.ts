import { createSlice } from '@reduxjs/toolkit';

// interface any {
//   rscc: any;
//   eqvet: any;
//   ts: any;
//   tshfl: any;
//   rsmdcc: any;
//   tsfwd: any;
//   others: any;
// }

interface State {
  addedDate: any
  type: any
  insuredName: any
  COB: any
  NIK: any
  address: any
  phone: any
  email: any
  polis: any
  merek: any
  model: any
  year: any
  rangka: any
  mesin: any
  plat: any
  okupasi: any
  perluasan:any;
  tsi: any
  periode: any
  kelas: any
  alamatObj: any
  newApp: any;
  komisi:any
  diskon:any
  sign:any
  status:any;
  rate:any
  ktp:any
  agentName:any;
  potentialPremi:any
  bangunan:any
  content:any;
  sr:any;
  tjh:number;
  pa:number;
}

const initialState: State ={
  addedDate: '',
  type: '',
  insuredName: '',
  COB: '',
  NIK: '',
  address: '',
  phone: '',
  email: '',
  polis: '',
  merek: '',
  model: '',
  year: '',
  rangka: '',
  mesin: '',
  plat: '',
  okupasi: '',
  perluasan: '',
  tsi: '',
  periode: '',
  kelas: '',
  alamatObj: '',
  newApp: '',
  komisi:0,
  diskon:0,
  sign:'',
  status:'',
  rate:0,
  ktp:'',
  agentName:'',
  potentialPremi:0,
  bangunan:'',
  content:'',
  sr:'',
  tjh:0,
  pa:0
};

export const newSlice = createSlice({
  name: 'newApp',
  initialState,
  reducers: {
    setNew: (state, action) => {
      // Add the newApp value to the existing array
      // state.newApp.push(action.payload.newApp);

      // Update other properties using the latest values
      state.addedDate= action.payload.addedDate;
      state.type= action.payload.type;
      state.insuredName=action.payload.insuredName;
      state.COB= action.payload.COB;
      state.NIK= action.payload.NIK;
      state.address= action.payload.address;
      state.phone= action.payload.phone;
      state.email= action.payload.email;
      state.polis= action.payload.polis;
      state.merek= action.payload.merek;
      state.model= action.payload.model;
      state.year= action.payload.year;
      state.rangka= action.payload.rangka;
      state.mesin= action.payload.mesin;
      state.plat= action.payload.plat;
      state.okupasi= action.payload.okupasi;
      state.perluasan= action.payload.perluasan;
      state.tsi= action.payload.tsi;
      state.periode= action.payload.periode;
      state.kelas= action.payload.kelas;
      state.alamatObj= action.payload.alamatObj;
      state.komisi= action.payload.komisi;
      state.diskon= action.payload.diskon;
      state.sign= action.payload.sign;
      state.status= action.payload.status;
      state.rate= action.payload.rate;
      state.ktp= action.payload.ktp;
      state.agentName= action.payload.agentName;
      state.sr= action.payload.sr;
      state.tjh= action.payload.tjh;
      state.pa= action.payload.pa;
      state.bangunan= action.payload.bangunan;
      state.content= action.payload.content;
      state.potentialPremi=(Math.ceil((parseInt(state.tsi)*parseFloat(state.rate))+state.tjh+state.pa))

      // const {addedDate,  
      //   type,
      //   insuredName,
      //   COB,
      //   NIK,
      //   address, 
      //   phone,
      //   email,
      //   polis,
      //   merek,
      //   model,
      //   year,
      //   rangka,
      //   mesin,
      //   plat,
      //   okupasi,
      //   perluasan,
      //   tsi,
      //   periode,
      //   kelas,
      //   alamatObj,
      //   komisi,
      //   diskon,
      //   sign,
      //   status,
      //   rate,
      //   ktp,
      //   agentName,
      //   potentialPremi} = state


      fetch('https://agentserver-production.up.railway.app/new', {
      // fetch('http://localhost:3001/new', {
        method:"POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(state),
      })
    },
  },
});

export const { setNew } = newSlice.actions;
export default newSlice.reducer;
export type NewState = ReturnType<typeof newSlice.reducer>;
