import React from "react";
import { Header, Footer } from "./components";
import "./scss/main.scss";
import Container from "./layouts/Container";


const App = () => {
  return (
    <div className="ui-wrapper">
      <Header isLogo />
      <div className="ui-content-wrapper">
        <Container>
          <h1>template</h1>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default App;
