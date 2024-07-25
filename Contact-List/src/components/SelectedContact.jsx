import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        console.log(`Fetching contact with ID: ${selectedContactId}`);
        const response = await fetch(`/api/users/${selectedContactId}`);
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const result = await response.json();
        console.log('Fetched contact:', result);
        setContact(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>Back</button>
      <h1>{contact.name}</h1>
      <p><strong>Username:</strong> {contact.username}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Website:</strong> {contact.website}</p>
      <p><strong>Company:</strong> {contact.company.name}</p>
    </div>
  );
}
