import FeaturesComponent from "../../components/FeatureComponent"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./Features.css"

export default function Features(){
    return(
        <div className="main">
            <Header/>
            <FeaturesComponent/>
            <Footer/>
        </div>
    )
}