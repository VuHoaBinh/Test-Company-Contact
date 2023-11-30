import React, { useState } from "react";
import ContactTable from "../components/ContactTable";
import ContactForm from "../components/ContactForm";
import Button from "@mui/material/Button";

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
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      <Button
        onClick={handleAddContact}
        variant="contained"
        style={{ margin: "10px" }}
      >
        <i className="fa-solid fa-plus" style={{ marginRight: "5px" }}></i>
        Add New Contact
      </Button>
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
