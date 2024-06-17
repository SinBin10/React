import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body";
import About from "./src/components/About";
//used for providing routes to application
import { createBrowserRouter, RouterProvider } from "react-router-dom";


/*
  normal export=>(used for single component in a file)

  export default component;
  import component from "path";

  named export=>(used for multiple components in a file)
  export component;
  import { component } from "path";

*/
const App = () => {
  return (
    <>
      <Heading />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/about',
    element: < About />
  },
  {
    path: '/',
    element: <App />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
