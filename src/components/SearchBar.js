import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <TextField
        id="filled-basic"
        placeholder="Search..."
        variant="filled"
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          sx: {
            backgroundColor: "white !important",
            margin: "10px",
            border: "none !important",
          },
        }}
        sx={{ width: "100%" }}
      />
    </div>
  );
};

export default SearchBar;
