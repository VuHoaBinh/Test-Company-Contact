import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DialogContent, Dialog, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const ModalUser = ({ isOpen, onCancel }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
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
      dispatch(addContact(values));
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
    <Dialog open={isOpen}>
      <p
        style={{
          margin: "10px",
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        Fill the information in the form
      </p>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
          <div>
            <TextField
              id="name"
              label="Full Name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ margin: "15px" }}
            />
          </div>
          <div>
            <TextField
              id="phone"
              name="phone"
              type="text"
              label="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              sx={{ margin: "15px" }}
            />
          </div>
          <div>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ margin: "15px" }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="info"
              type="submit"
              style={{ margin: "12px" }}
              onClick={handleClick}
            >
              Submit
            </Button>
          </div>
        </form>
        <Button
          variant="contained"
          color="info"
          type="submit"
          onClick={onCancel}
          style={{ marginLeft: "125px" }}
        >
          Cancel
        </Button>
        <Snackbar
          open={openToast}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose}>Successfully!</Alert>
        </Snackbar>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUser;
