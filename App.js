import React from "react";
import ReactDOM from "react-dom/client";
/*
This is the core of react meaning that react was originally made to be usd this way but the nested structures of componenents you see made the code a bit too complex to understand so this approach was discarded
*/

const heading = React.createElement("h1", { id: "heading" }, "Binay pratap singh");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//JSX --> a way to write react which makes react, developer friendly
const jsxHeading = <h1 id="heading">Binay pratap singh using jsx</h1>
// its not a valid pure javascript syntax
//bundlers like parcel and vite converts(tranpiles) jsx to core react element which you see above this react element(a javascript object) further get converted to normal html and js which is understood by the browser.

root.render(jsxHeading);

console.log(heading);
console.log(jsxHeading);
