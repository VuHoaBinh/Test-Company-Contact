let fakeData = [
  {
    id: 1,
    name: "John Doe",
    email: "mau1@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "mau2@example.com",
    phone: "987-654-3210",
  },
];

const initialState = {
  mode: "light",
  contacts: fakeData,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        mode: action.payload,
      };

    case "ADD_CONTACT":
      const newDataAdd = [...state.contacts, action.payload];
      fakeData = [...newDataAdd];
      return {
        ...state,
        contacts: newDataAdd,
      };

    case "UPDATE_CONTACT":
      const newUpdate = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      fakeData = [...newUpdate];
      return {
        ...state,
        contacts: [...newUpdate],
      };

    case "DELETE_CONTACT":
      const newDelete = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      fakeData = [...newDelete];
      return {
        ...state,
        contacts: [...newDelete],
      };

    case "FIND_CONTACT":
      return {
        ...state,
        contacts: fakeData.filter((contact) =>
          contact.name.includes(action.payload)
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;
