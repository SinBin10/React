import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./src/components/Heading";
import Body from "./src/components/Body";
import About from "./src/components/About";
// import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Menu from "./src/components/Menu";
//used for providing routes to application
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*
  normal export=>(used for single component in a file)

  export default component;
  import component from "path";

  named export=>(used for multiple components in a file)
  export component;
  import { component } from "path";

*/
const Contact = lazy(() => import("./src/components/Contact"));
const App = () => {
  return (
    <>
      <Heading />
      <Outlet />
    </>
  );
};
/*
  create browserrouter is used to create routes for your application
  react is called also called a single page application because the whole page is not reloaded 
  when traversed through multiple web pages only the some components are rendered
*/
const appRouter = createBrowserRouter([
  /*
  we are putting everything into children key so that we can use the outlet component
  which navigates through children.
  this helping in reloading only a part of the page like here we replace the body and keep the header component at all times
  */
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          //when not adding suspense react immediately loads the
          //contact component but since it is being fetched through lazy
          //loading the file is not available yet hence the error not found
          <Suspense fallback={<h1>Lazy Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resID",
        element: <Menu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
