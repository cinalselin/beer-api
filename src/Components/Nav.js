// IMPORT IMAGES
import logo from "../Images/Logo.svg";
import { Link } from "react-router-dom";

// IMPORT CSS
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Beer icon" />
      </Link>
    </nav>
  );
};

export default Nav;
