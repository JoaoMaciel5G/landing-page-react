import "./Footer.css"
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="icons">
                <FaFacebookF className="icon-socialMedias"/>
                <FaTwitter className="icon-socialMedias"/>
                <AiFillLinkedin className="icon-socialMedias"/>
            </div>
            <div>
                <p className="footerParagraph">&copy; 2022 Landing Page Free React. All Rights Reserved</p>
            </div>
            <div>
                <p className="footerParagraph">Development by <a href="https://github.com/JoaoMaciel5G">JoaoMaciel</a></p>
            </div>
        </footer>
    )
}