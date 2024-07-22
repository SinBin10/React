import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
  const [Login, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="navbar">
      {/*while routing through multiple pages we dont use anchor tag in react why ?
  because it loads the page completely which takes a huge performance hit
  that is why we use "Link to" provided by react-router-dom package
  which does not reload the whole page.*/}
      <Link to="/">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </Link>
      <ul className="list">
        <li>
          {isOnline === true ? (
            <div className="indicator online"></div>
          ) : (
            <div className="indicator offline"></div>
          )}
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="#">Profile</Link>
        </li>
        <li>
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
