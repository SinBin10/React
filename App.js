import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body";

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
