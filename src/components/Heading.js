import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const [Login, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="flex items-center justify-between">
      {/*while routing through multiple pages we dont use anchor tag in react why ?
  because it loads the page completely which takes a huge performance hit
  that is why we use "Link to" provided by react-router-dom package
  which does not reload the whole page.*/}
      <Link className="w-20" to="/">
        <img src={LOGO_URL} alt="logo" />
      </Link>
      <ul className="flex items-center">
        <li className="w-6 h-6">
          {isOnline === true ? (
            <div className="h-full rounded-full bg-green-600"></div>
          ) : (
            <div className="h-full rounded-full bg-red-600"></div>
          )}
        </li>
        <li className="mx-10">
          <Link to="/about">About us</Link>
        </li>
        <li className="mx-10">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-10">
          <Link to="#">Profile</Link>
        </li>
        <li className="mx-10">
          <Link to="#">Cart</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          Login === "Login" ? setLogin("Logout") : setLogin("Login");
        }}
        className="login"
      >
        {Login}
      </button>
    </div>
  );
};

export default Heading;
