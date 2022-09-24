import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modalVisible: false,
  data: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modalVisible = action.payload.visible;
      state.data = action.payload.data ? action.payload.data : false;
    },
  },
});

export const {toggleModal} = modal.actions;
export default modal.reducer;
