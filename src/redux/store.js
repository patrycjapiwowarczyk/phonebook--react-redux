import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slice';
import { filterReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
