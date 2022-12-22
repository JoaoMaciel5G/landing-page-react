import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
    return(
        <div>
            <nav>
                <ul>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/features">Features</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="FAQ">FAQ</Link>
                </ul>
            </nav>
        </div>
    )
}