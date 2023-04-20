import React from "react";
import Header from "./components/Header";
import "./scss/main.scss"
import Footer from "./components/Footer";

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
