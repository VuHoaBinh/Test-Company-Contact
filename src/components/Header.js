import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import { findContact } from "../redux/actions";
import { useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const dispatch = useDispatch();

  const handleSearch = (searchTerm) => {
    dispatch(findContact(searchTerm));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#00FFFF",
      }}
    >
      <div className="header__left">
        <Link to="/" style={{ marginLeft: "50px" }}>
          <i className="fa-solid fa-address-book"></i>
          <span style={{ marginLeft: "20px" }}>Wavelabs</span>
          <span
            style={{ marginLeft: "20px" }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Front end task - saved <i className="fa-solid fa-caret-down"></i>
          </span>
        </Link>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ display: "relative", top: "50", left: "50" }}
        >
          <MenuItem onClick={handleClose}> home 1 </MenuItem>
          <MenuItem onClick={handleClose}> home 2 </MenuItem>
          <MenuItem onClick={handleClose}> home 3 </MenuItem>
        </Menu>
      </div>
      <div className="header__center" style={{ flex: 0.5 }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="header__right">
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Header;
