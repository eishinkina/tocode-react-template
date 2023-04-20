import React from "react";
import { Header, Footer } from "./components";
import "./scss/main.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <p>hello world</p>
      <Footer />
    </div>
  );
};

export default App;
