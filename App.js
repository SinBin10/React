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
    <ul class="list">
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

const Card = () => {
  return (
    <div className="card">
      <div>
        <img className="card-img" src={biryani} alt="biryani" />
      </div>
      <div className="card-body">
        <h2>Biryani</h2>
        <p>Rs.120</p>
        <p>2.3 out of 5</p>
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
        class="search"
        name="search"
        placeholder="Enter you favourite food..."
      />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
