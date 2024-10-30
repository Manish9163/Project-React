import React from "react";
import Nav from "./comp/Nav";
import "./App.css"
import Footer from "./comp/Footer"
import Catagory from "./comp/Catagory";
import "./comp/Catagory.css";

function App() {
  return (
    <>
      <Nav />
       <Catagory />
      <hr />
      <h1>Discover products for you</h1>
      <Catagory />
      <hr />
      <h1>your future is in your hand</h1>
      <Catagory /> 
      <br />
      <hr/>
      <Footer/>
    </>
  );
}

export default App;
