import { LOGO_URL } from "../utils/constants";

const Heading = () => {
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
        </div>
    );
};

export default Heading;