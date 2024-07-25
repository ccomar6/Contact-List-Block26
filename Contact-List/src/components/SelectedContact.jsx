import React, { useState, useEffect } from 'react';

export default function SelectedContact({ contactId, onBack }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`/api/users/${contactId}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchContact();
  }, [contactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company.name}</p>
    </div>
  );
}
