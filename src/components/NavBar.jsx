import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu} from "react-icons/ai";
import {GrAdd} from "react-icons/gr"
import "./NavBar.css";

export default function NavBar() {
  let [changeClass, setClass] = useState(true);
  let [hidden, handleHidden] = useState(true)

  return (
    <div id="container-navbar">
      <nav>
        <ul className={changeClass ? "nav" : "show"}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/features">
            Features
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </ul>
      </nav>
      <div>
        <AiOutlineMenu
          onClick={() => setClass(!changeClass)}
          id="hamburguerMenu"
        />
        <GrAdd id="close-hamburguer"/>
      </div>
    </div>
  );
}
