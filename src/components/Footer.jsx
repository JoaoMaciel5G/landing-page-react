import "./Footer.css"
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="icons">
                <FaFacebookF className="icon"/>
                <FaTwitter className="icon"/>
                <AiFillLinkedin className="icon"/>
            </div>
            <div>
                <p>&copy; 2022 Landing Page Free React. All Rights Reserved</p>
            </div>
            <div>
                <p>Development by <a href="https://github.com/JoaoMaciel5G">JoaoMaciel</a></p>
            </div>
        </footer>
    )
}