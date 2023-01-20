import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import "./NavBar.css";

export default function NavBar() {
  let [changeClass, setClass] = useState(true);
  let [hidden, handleHidden] = useState(false)
  
  function handleIcon(){
    setClass(!changeClass)
    handleHidden(!hidden)
  }
  return (
    <div id="container-navbar">
      <nav>
        <ul className={changeClass ? "nav" : "hidden-navbar"}>
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
          onClick={handleIcon}
          className={hidden ? "show-hamburguerMenu" : "close-hamburguerMenu"}
        />
        <AiOutlineClose className={changeClass ? "close-menu" : "show-closeMenu"} onClick={handleIcon}/>
      </div>
    </div>
  );
}
