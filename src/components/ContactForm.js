import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateContact, addContact } from "../redux/actions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function ContactForm({ contact, onCancel, onSave }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: contact ? contact.name : "",
      email: contact ? contact.email : "",
      phone: contact ? contact.phone : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Full Name is required")
        .matches(/^\D*$/, "Name cannot contain digits"),

      phone: Yup.string()
        .required("Phone Number is required")
        .matches(/[0-9]/, "Phone Number cannot contain letters"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      if (contact) {
        dispatch(updateContact({ ...contact, ...values }));
      } else {
        dispatch(addContact(values));
      }
      onSave();
    },
  });

  const [openToast, setOpenToast] = React.useState(false);

  const handleClick = () => {
    setOpenToast(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

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
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        name="phone"
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <div style={{ margin: "15px" }}>
        <Button type="submit" variant="contained" style={{ margin: "15px" }}>
          Save
        </Button>
        <Snackbar
          open={openToast}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose}>Successfully!</Alert>
        </Snackbar>
        <Button type="button" onClick={onCancel} variant="contained">
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
