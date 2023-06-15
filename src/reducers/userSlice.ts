import { createSlice } from '@reduxjs/toolkit';

const initialState: { username: any; nama: any } = {
  username: '',
  nama: '',
};

// Retrieve the user data from localStorage if it exists
const savedUsername = localStorage.getItem('username');
const savedNama = localStorage.getItem('nama');
if (savedUsername && savedNama) {
  initialState.username = savedUsername;
  initialState.nama = savedNama;
}

export const userSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.nama = action.payload.nama;
      // Store the user data in localStorage
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('nama', action.payload.nama);
    },
    logout: (state) => {
      state.username = '';
      state.nama = '';
      // Clear the user data from localStorage
      localStorage.removeItem('username');
      localStorage.removeItem('nama');
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export type RootState = ReturnType<typeof userSlice.reducer>;
