import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function EditPage() {
  const { id } = useParams();
  const history = useHistory();

  const handleCancelEdit = () => {
    history.push("/");
  };

  const handleSaveEdit = () => {
    history.push("/");
  };

  const contact = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "10px", marginBottom: "30px" }}>
        Edit Page
      </h1>
      <ContactForm
        contact={contact}
        onCancel={handleCancelEdit}
        onSave={handleSaveEdit}
      />
    </div>
  );
}

export default EditPage;
