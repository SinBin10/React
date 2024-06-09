import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Heading = () => {
    const [Login, setLogin] = useState("Login");
    return (
        <div className="navbar">
            <div>
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
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
            <button onClick={() => { Login === "Login" ? setLogin("Logout") : setLogin("Login") }} className="login">{Login}</button>
        </div>
    );
};

export default Heading;