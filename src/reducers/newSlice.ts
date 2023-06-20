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
}

const initialState: State = {
  addedDate: [],
  type: [],
  insuredName: [],
  COB: [],
  NIK: [],
  address: [],
  phone: [],
  email: [],
  polis: [],
  merek: [],
  model: [],
  year: [],
  rangka: [],
  mesin: [],
  plat: [],
  okupasi: [],
  perluasan: [],
  tsi: [],
  periode: [],
  kelas: [],
  alamatObj: [],
  newApp: [],
  komisi:[],
  diskon:[],
  sign:[]
};

export const newSlice = createSlice({
  name: 'newApp',
  initialState,
  reducers: {
    setNew: (state, action) => {
      // Add the newApp value to the existing array
      // state.newApp.push(action.payload.newApp);

      // Update other properties using the latest values
      state.addedDate.push( action.payload.addedDate);
      state.type.push( action.payload.type);
      state.insuredName.push(action.payload.insuredName);
      state.COB.push( action.payload.COB);
      state.NIK.push( action.payload.NIK);
      state.address.push( action.payload.address);
      state.phone.push( action.payload.phone);
      state.email.push( action.payload.email);
      state.polis.push( action.payload.polis);
      state.merek.push( action.payload.merek);
      state.model.push( action.payload.model);
      state.year.push( action.payload.year);
      state.rangka.push( action.payload.rangka);
      state.mesin.push( action.payload.mesin);
      state.plat.push( action.payload.plat);
      state.okupasi.push( action.payload.okupasi);
      state.perluasan.push( action.payload.perluasan);
      state.tsi.push( action.payload.tsi);
      state.periode.push( action.payload.periode);
      state.kelas.push( action.payload.kelas);
      state.alamatObj.push( action.payload.alamatObj);
      state.komisi.push( action.payload.komisi);
      state.diskon.push( action.payload.diskon);
      state.sign.push( action.payload.sign);
    },
  },
});

export const { setNew } = newSlice.actions;
export default newSlice.reducer;
export type NewState = ReturnType<typeof newSlice.reducer>;
