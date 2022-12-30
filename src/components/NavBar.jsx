import { Link } from "react-router-dom"
import { useState } from "react"
import "./NavBar.css"

export default function NavBar(){
    let [changeClass, setClass] = useState(true)

    return(
        <div>
            <nav>
            <div id="hamburguer" onClick={()=> setClass(!changeClass)}>
                    <div className="spanHamburguer"></div>
                    <div className="spanHamburguer"></div>
                    <div className="spanHamburguer"></div>
                </div>
                <ul className={changeClass ? "nav" : "show"}>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/features">Features</Link>
                    <Link className="link" to="/login">Login</Link>
                </ul>
            </nav>
        </div>
    )
}