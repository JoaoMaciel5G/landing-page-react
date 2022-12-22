import { FaSkiing } from "react-icons/fa"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import SignUp from "../../components/SignUp"
import "./Home.css"

export default function Home(){
    return(
        <div className="main">
            <Header/>
            <div className="register">
                <div className="enum">
                    <h2>Fly makes you<br/>faster</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Omnis at iure autem repudiandae dolor</p>
                    <p>Esse animi nisi eveniet, ducimus necessitatibus ipsa.</p>
                    <p>Eaque molestias laboriosam quam?</p>
                </div>
                <SignUp/>
            </div>
            <Footer/>
        </div>
        
    )
}