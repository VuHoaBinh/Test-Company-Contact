import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateContact } from "../redux/actions";

function ContactForm({ contact, onCancel, onSave }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: contact ? contact.name : "",
      email: contact ? contact.email : "",
      phone: contact ? contact.phone : "",
    },
    onSubmit: (values) => {
      if (contact) {
        dispatch(updateContact({ ...contact, ...values }));
      } else {
        // Logic to handle new contact creation
      }
      onSave();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {/* Similar input fields for email and phone */}
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ContactForm;
