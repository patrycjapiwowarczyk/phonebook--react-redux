import React from 'react';
import css from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/slice';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <div className={css['filter']}>
      <label className={css['filter__container']}>
        <p>Find contacts by name:</p>
        <input
          className={css['filter__input']}
          type="text"
          name="name"
          onChange={event => handleChange(event)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
      </label>
    </div>
  );
};
