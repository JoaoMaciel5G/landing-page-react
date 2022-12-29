import "./Login.css"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginComponent from "../../components/LoginComponent"

export default function Login(){
    return(
        <div className="main">
            <Header/>
            <LoginComponent/>
            <Footer/>
        </div>
    )
}