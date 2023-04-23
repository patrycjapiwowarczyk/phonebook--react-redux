import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/slice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    const input = event.target;
    const value = {
      name: input.name.value,
      number: input.number.value,
    };
    dispatch(addContact(value));
    input.reset();
  };

  return (
    <div>
      <form className={css['contact-form']} onSubmit={handleFormSubmit}>
        <label className={css['contact-form__item']}>
          <p>Name:</p>
          <input
            className={css['contact-form__input']}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css['contact-form__item']}>
          <p>Number:</p>
          <input
            className={css['contact-form__input']}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css['contact-form__button']} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
