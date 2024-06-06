import React from "react";
import ReactDOM from "react-dom/client";
import logo from '/Images/logo.jpg';

/*
*  Header
    - logo
    - list 
  Body
    - search
    - Card
  Footer
    - contact us
    - Copyright
    - Address
*/

const List = () => {
  return (
    <ul class="list">
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Cart</a></li>
    </ul>
  );
}

const Heading = () => {
  return (
    <div className="navbar">
      <div><img className="logo" src={logo} alt="logo" /></div>
      <List />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Heading />);
