import { createSlice } from '@reduxjs/toolkit';

interface PerluasanState {
  rscc: any;
  eqvet: any;
  ts: any;
  tshfl: any;
  rsmdcc: any;
  tsfwd: any;
  others: any;
}

interface State {
  addedDate: any;
  type: any;
  insuredName: any;
  COB: any;
  NIK: any;
  address: any;
  phone: any;
  email: any;
  polis: any;
  merek: any;
  model: any;
  year: any;
  rangka: any;
  mesin: any;
  plat: any;
  okupasi: any;
  perluasan: PerluasanState;
  tsi: any;
  periode: any;
  kelas: any;
  alamatObj: any;
  newApp: any;
}

const initialState: State = {
  addedDate: "",
  type: "",
  insuredName: "",
  COB: "",
  NIK: "",
  address: "",
  phone: "",
  email: "",
  polis: "",
  merek: "",
  model: "",
  year: "",
  rangka: "",
  mesin: "",
  plat: "",
  okupasi: "",
  perluasan: {
    rscc: false,
    eqvet: false,
    ts: false,
    tshfl: false,
    rsmdcc: false,
    tsfwd: false,
    others: false,
  },
  tsi: "",
  periode: "",
  kelas: "",
  alamatObj: "",
  newApp: "",
};

export const newSlice = createSlice({
  name: 'newApp',
  initialState,
  reducers: {
    setNew: (state, action) => {
      // Add the newApp value to the existing array
      // state.newApp.push(action.payload.newApp);

      // Update other properties using the latest values
      state.addedDate = action.payload.addedDate;
      state.type = action.payload.type;
      state.insuredName = action.payload.insuredName;
      state.COB = action.payload.COB;
      state.NIK = action.payload.NIK;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.polis = action.payload.polis;
      state.merek = action.payload.merek;
      state.model = action.payload.model;
      state.year = action.payload.year;
      state.rangka = action.payload.rangka;
      state.mesin = action.payload.mesin;
      state.plat = action.payload.plat;
      state.okupasi = action.payload.okupasi;
      // state.perluasan = action.payload.perluasan;
      state.tsi = action.payload.tsi;
      state.periode = action.payload.periode;
      state.kelas = action.payload.kelas;
      state.alamatObj = action.payload.alamatObj;
    },
  },
});

export const { setNew } = newSlice.actions;
export default newSlice.reducer;
export type NewState = ReturnType<typeof newSlice.reducer>;
