import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Features from "../pages/Features/Features"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/features" element={<Features/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}