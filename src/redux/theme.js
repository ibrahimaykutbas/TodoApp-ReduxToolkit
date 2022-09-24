import {createSlice} from '@reduxjs/toolkit';

import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const themeInfo = storage.getBoolean('theme');

const initialState = {
  isDark: themeInfo ? themeInfo : false,
};

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.isDark = !state.isDark;

      return storage.set('theme', state.isDark);
    },
  },
});

export const {changeTheme} = theme.actions;
export default theme.reducer;
