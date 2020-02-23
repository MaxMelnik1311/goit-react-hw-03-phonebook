import React from 'react';

import T from 'prop-types';

function Contact({ name, number, id, deleteContact }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete {name} from contact list
      </button>
    </li>
  );
}

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.number.isRequired,
  id: T.number.isRequired,
  deleteContact: T.func.isRequired,
};

export default Contact;
