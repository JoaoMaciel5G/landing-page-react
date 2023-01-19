import NavBar from "./NavBar";
import {Link} from "react-router-dom"
import "./Header.css";

export default function Header() {
  return (
    <header className="head">
      <Link to="/" className="titleHeader">Landing</Link>
      <NavBar/>
    </header>
  );
}
