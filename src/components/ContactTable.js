import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteContact } from "../redux/actions";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function ContactTable() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <StyledTableRow key={contact.id}>
              <StyledTableCell component="th" scope="row">
                {contact.name}
              </StyledTableCell>
              <StyledTableCell align="left">{contact.email}</StyledTableCell>
              <StyledTableCell align="left">{contact.phone}</StyledTableCell>
              <StyledTableCell align="center">
                <Button onClick={() => handleEdit(contact.id)} variant="text">
                  <i className="fa-regular fa-pen-to-square"></i>
                </Button>
                <Button onClick={() => handleDelete(contact.id)} variant="text">
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactTable;
