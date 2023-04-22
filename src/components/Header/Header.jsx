import React from "react";
import Container from "../../layouts/Container";
import "./../../scss/main.scss";
import propTypes from "prop-types";
import classNames from "classnames";

//icons
import { ReactComponent as LogoIcon } from "../../assets/img/logo.svg";

function Header({ isLogo, isFixed, className, ...attrs }) {
  const classes = classNames(className, {
    isFixed,
  });
  // console.log('hello')
  return (
    <header className={classes}{...attrs}>
      <Container>
        <div className="Header flex justify-between py-2 mb-4">
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
    </header>
  );
}

Header.prototype = {
  isLogo: propTypes.bool,
  isFixed: propTypes.bool,
  className: propTypes.string,
};
Header.defaultProps = {
  isLogo: false,
  isFixed: false,
  className: "", 
};

export default Header;
