import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateContact, addContact } from "../redux/actions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        dispatch(addContact(values));
      }
      onSave();
    },
  });

  return (
    <form
      style={{ textAlign: "center", width: "100%" }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <div style={{ margin: "15px" }}>
        <Button type="submit" variant="contained" style={{ margin: "15px" }}>
          Save
        </Button>
        <Button type="button" onClick={onCancel} variant="contained">
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
