import "./SignUp.css"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

export default function SignUp(){
    return(
        <div className="sign">
            <h2>Sign Up for Free</h2>
            <div className="div-input">
                <input type="text" className="input" placeholder="Full Name" required/>
            </div>
            <div className="div-input">
                <input type="email" className="input" placeholder="E-mail" required/>
            </div>
            <div className="div-input">
                <input type="password" className="input" placeholder="Password" required/>
                <AiFillEye/>
            </div>
            <div className="div-input">
                <select className="input" name="select" id="select">
                    <option value="type">Type</option>
                    <option value="basic">Basic</option>
                    <option value="business">Business</option>
                    <option value="free">Free</option>
                </select>
            </div>
            <div>
                <button type="submit">Register</button>  
            </div>
            
        </div>
    )
}