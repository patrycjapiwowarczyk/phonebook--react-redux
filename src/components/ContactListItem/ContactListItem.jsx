import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li key={contact.id} className={css['contact-list__item']}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css['contact-list__button']}
        type="button"
        onClick={handleClick}
      >
        <b>X</b>
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
