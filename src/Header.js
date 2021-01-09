import React from "react";
import "./Header.css";
// import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"
          alt="fb-logo"
        />
        <div className="header__input">
          {/* <SearchIcon /> */}
          <input type="text" placeholder="Search Facebook" > </input>
        </div>
      </div>
      <div className="header__center">
        <div class="header__option--active">{/* <HomeIcon fontSize="large"/> */}</div>
        <div class="header__option">{/* <HomeIcon fontSize="large"/> */}</div>
        <div class="header__option">{/* <HomeIcon fontSize="large"/> */}</div>
        <div class="header__option">{/* <HomeIcon fontSize="large"/> */}</div>
        <div class="header__option">{/* <HomeIcon fontSize="large"/> */}</div>
      </div>
      <div className="header__right">
        <div class="header__info">
          {/* <Avatar /> */}
          <h4>Mahi</h4>
        </div>

        {/* <IconButton> */}
          {/* <AddIcon /> */}
        {/* </IconButton> */}
        {/* <IconButton> */}
          {/* <AddIcon /> */}
        {/* </IconButton> */}
        {/* <IconButton> */}
          {/* <AddIcon /> */}
        {/* </IconButton> */}
        {/* <IconButton> */}
          {/* <AddIcon /> */}
        {/* </IconButton> */}
      </div>
    </div>
  );
}

export default Header;
