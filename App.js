import React from "react";
import ReactDOM from "react-dom/client";
/*
This is the core of react meaning that react was originally made to be usd this way but the nested structures of components you see made the code a bit too complex to understand so this approach was discarded
*/

//react element
//no need for return keyword and parenthesis while returning a single JSX element
//const Title = ()=><h1 id="heading">binay element using JSX</h1>
//wrap this inside round brackets when returning mulitple components as well
// const Title = ()=>(<><h1 id="heading">binay element using JSX</h1>
// <h2>Heading 2 tag</h2></>);

//when using the return keyword you wrap inside curly brackets as it represents a function

//react componenent -> a function which returns JSX
const Heading = ()=>(
  <div id="container">
    <Title />
    <h1 id="heading">Binay react component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Heading />);

console.log(Title);
console.log(<Heading />);
