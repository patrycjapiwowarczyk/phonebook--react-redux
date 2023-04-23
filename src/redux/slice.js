import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const LOCAL_STORAGE_CONTACTS = 'contacts';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsInitialState = JSON.parse(
  localStorage.getItem(
    LOCAL_STORAGE_CONTACTS ? LOCAL_STORAGE_CONTACTS : contactsArray
  )
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        setLocalSttorage([...state]);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
        setLocalSttorage([...state]);
      },
    },
  },
});

const setLocalSttorage = contacts => {
  localStorage.setItem(LOCAL_STORAGE_CONTACTS, JSON.stringify(contacts));
};

const fitlerInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: fitlerInitialState,
  reducers: {
    filterChange: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
