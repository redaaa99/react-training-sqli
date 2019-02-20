import React, { Component } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default App;
