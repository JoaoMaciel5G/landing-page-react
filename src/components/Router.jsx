import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import About from "../pages/About"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}