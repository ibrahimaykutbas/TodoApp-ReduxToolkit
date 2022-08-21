import {configureStore} from '@reduxjs/toolkit';

import todo from './todo';
import modal from './modal';

const store = configureStore({
  reducer: {
    todo,
    modal,
  },
});

export default store;
