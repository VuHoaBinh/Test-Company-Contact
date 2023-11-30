import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../redux/actions";

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(changeTheme(!isToggled ? "dark" : "light"));
    setToggled(!isToggled);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? "Toggle Off" : "Toggle On"}
    </button>
  );
};

export default ToggleButton;
