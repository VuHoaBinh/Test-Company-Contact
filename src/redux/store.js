import { createStore } from "redux";
import contactReducer from "./reducers";

const store = createStore(contactReducer);

export default store;
