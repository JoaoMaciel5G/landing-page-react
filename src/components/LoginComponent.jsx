import "./LoginComponent.css"

export default function Login(){
    return(
        <form className="login">
            <div id="title-login">
                <h2>Login</h2>
            </div>
            <div className="div-input-login">
                <input type="email" className="inputLogin" placeholder="E-mail" required/>
            </div>
            <div className="div-input-login">
                <input type="password" className="inputLogin" placeholder="Password" required/>
            </div>
            <div className="btnDivLogin">
                <button className="btnLogin" type="submit">Login</button>  
            </div>
        </form>
    )
}