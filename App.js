import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/Images/logo.jpg";
import biryani from "/Images/biryani.jpeg";

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
    <ul className="list">
      <li>
        <a href="#">About us</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
    </ul>
  );
};

const Heading = () => {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <List />
    </div>
  );
};

const Card = ({ dish, price, rating }) => {
  return (
    <div className="card">
      <div>
        <img className="card-img" src={biryani} alt="biryani" />
      </div>
      <div className="card-body">
        <h2>{dish}</h2>
        <p>{price}</p>
        <p>{rating + " out of 5"}</p>
        <p>30 minutes</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <input
        type="text"
        className="search"
        name="search"
        placeholder="Enter you favourite food..."
      />
      <div className="card-container">
        <Card dish="Biryani" price="Rs.120" rating="2.3" />
        <Card dish="Fried Rice" price="Rs.100" rating="4" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Heading />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
