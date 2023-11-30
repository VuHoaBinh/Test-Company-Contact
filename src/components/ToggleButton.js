import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? "Toggle Off" : "Toggle On"}
    </button>
  );
};

export default ToggleButton;
