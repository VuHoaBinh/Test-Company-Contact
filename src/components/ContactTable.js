import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteContact } from "../redux/actions";

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

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => handleEdit(contact.id)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
