import React from 'react';
import T from 'prop-types';
import Contact from './Contact';

function ContactList({ list, deleteContact }) {
  return (
    <ul>
      {list.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  list: T.arrayOf({}).isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactList;
