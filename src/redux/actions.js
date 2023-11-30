// actions.js

export const addContact = (contact) => ({
  type: "ADD_CONTACT",
  payload: contact,
});

export const updateContact = (contact) => ({
  type: "UPDATE_CONTACT",
  payload: contact,
});

export const deleteContact = (id) => ({
  type: "DELETE_CONTACT",
  payload: id,
});

export const changeTheme = (payload) => ({
  type: "CHANGE_THEME",
  payload,
});

export const findContact = (payload) => ({
  type: "FIND_CONTACT",
  payload,
});
