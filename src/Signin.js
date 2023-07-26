const Signin = () => {
    const signhandleClick = () => { 
        alert("Account has been created successfully");
    }
    return ( 
        <div className="signin">
            <div className="contain">
                <h1>SIGN-IN</h1>
                <p>Reconnect with your friends!</p><br/>
                <p>Email ID: <input type="text" /></p><br/>
                <p>Password: <input type="password" /></p><br/>
                <button onClick={signhandleClick} className="signinsubmit">Sign-In</button>
            </div>
        </div>
     );
}
 
export default Signin;