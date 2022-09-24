import {configureStore} from '@reduxjs/toolkit';

import todo from './todo';
import modal from './modal';
import theme from './theme';

const store = configureStore({
  reducer: {
    todo,
    modal,
    theme,
  },
});

export default store;
