import React from "react";
import PropTypes from 'prop-types';

ContactRow.propTypes = {
  contact: PropTypes.object.isRequired,
  setSelectedContactId: PropTypes.func.isRequired,
};


export default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
