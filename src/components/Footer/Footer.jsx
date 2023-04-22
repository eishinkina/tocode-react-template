import React from "react";
import "./Footer.scss";
import Container from "../../layouts/Container";

function Footer({...attrs}) {
  return (
    <footer className="Footer" {...attrs}>
      <Container>
        <div className="py-2 mt-6">
          <p className="text-center text-xs" style={{ opacity: 0.6 }}>
            Made on course{" "}
            <a
              target="_blank"
              href="https://app.tocode.ru/courses/react-pro/react-app"
              className="ui-link ml-1"
            >
              React.js - from scratch to result
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
