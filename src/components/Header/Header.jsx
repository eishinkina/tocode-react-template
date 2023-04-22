import React from "react";
import Container from "../../layouts/Container";
import "./../../scss/main.scss";
import propTypes from "prop-types"

//icons
import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";

function Header({ isLogo, isFixed }) {
  // console.log('hello')
  return (
    <Container>
      <div
        className={`Header flex justify-between py-2 mb-4 ${
          isFixed && "isFixed"
        }`}
      >
        <div className="Logo">
          {isLogo && <LogoIcon />}
          <span>React template </span>
        </div>
        <ul className="ui-button-group">
          <li className="ui-link">Home</li>
          <li className="ui-link">About</li>
        </ul>
      </div>
    </Container>
  );
}

Header.prototype = {
  isLogo : propTypes.bool,
  isFixed : propTypes.bool,
}
Header.defaultProps = {
  isLogo : false,
  isFixed : false,
}

export default Header;
