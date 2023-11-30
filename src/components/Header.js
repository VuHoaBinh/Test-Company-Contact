import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

function Header() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">Wavelabs</Link>
      </div>
      <div className="header__center">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="header__right">
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Header;
