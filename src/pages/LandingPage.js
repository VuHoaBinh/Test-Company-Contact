import React, { useState } from "react";
import ContactTable from "../components/ContactTable";
import ContactForm from "../components/ContactForm";

function LandingPage() {
  const [isAddingContact, setAddingContact] = useState(false);

  const handleAddContact = () => {
    setAddingContact(true);
  };

  const handleCancelAddContact = () => {
    setAddingContact(false);
  };

  const handleSaveContact = () => {
    setAddingContact(false);
    // Logic to update table or Redux store with new contact
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={handleAddContact}>Add Contact</button>
      {isAddingContact ? (
        <ContactForm
          onCancel={handleCancelAddContact}
          onSave={handleSaveContact}
        />
      ) : (
        <ContactTable />
      )}
    </div>
  );
}

export default LandingPage;
