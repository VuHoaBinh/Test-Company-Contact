import React, { useState } from "react";
import ContactTable from "../components/ContactTable";
import Button from "@mui/material/Button";
import ModalUser from "../components/ModalUser";

function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [isAddingContact, setAddingContact] = useState(false);

  const handleCancelAddContact = () => {
    setOpen(false);
  };

  const handleAddContact = () => {
    setOpen(true);
    setAddingContact(true);
  };

  const handleEditContact = (contact) => {
    setOpen(true);
  };

  const sampleContact = {
    name: "",
    email: "",
    phone: "",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Landing Page</h1>
      <Button
        onClick={handleAddContact}
        variant="contained"
        style={{ padding: "20px" }}
      >
        <i className="fa-solid fa-plus" style={{ marginRight: "5px" }}></i>
        Add New Contact
      </Button>

      <ContactTable onEdit={handleEditContact} />

      <ModalUser isOpen={open} onCancel={handleCancelAddContact} />
    </div>
  );
}

export default LandingPage;
