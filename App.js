/*
This is the core of react meaning that react was originally made to be usd this way but the nested structures of componenents you see made the code a bit too complex to understand so this approach was discarded

<div id="parent">
    <div id="child">
    <h1>
        I am h1 tag
    </h1>
    <h2>
        i am h2 tag
    </h2>
    <div>
</div
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
