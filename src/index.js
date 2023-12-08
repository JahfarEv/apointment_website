import React from "react";
import ReactDOM from "react-dom";
import Header from "./HeadFooter/Header";
import Footer from "./HeadFooter/Footer";
import List from "./components/List"


ReactDOM.render(
  <div className="App">
    <Header/>
    <div className="app-body">
      <List/>
    </div>
    <Footer/>
  </div>,

  document.getElementById("root")
);
