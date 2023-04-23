import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.includes(filter));
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const activeContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className={css['contact-list']}>
      {!!activeContacts &&
        activeContacts.map(contact => <ContactListItem contact={contact} />)}
    </ul>
  );
};
