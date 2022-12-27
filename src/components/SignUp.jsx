import "./SignUp.css"

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
            </div>
            <div className="div-input" id="select">
                <select className="input" name="select">
                    <option value="type">Type</option>
                    <option value="basic">Basic</option>
                    <option value="business">Business</option>
                    <option value="Master">Master</option>
                </select>
            </div>
            <div className="btnDiv">
                <button id="btn" type="submit">Register</button>  
            </div>
        </div>
    )
}