const Signup = () => {
    const handleClick = () => { 
        alert("Account has been created successfully");
    }
    return ( 
        <div className="signup">
            <div className="container">
                <h1>SIGN-UP</h1>
                <p className="subtxt">Welcome to V-Connect. Create your account to connect with others.</p>
                <form className="signupform">
                    <p>Full Name:&nbsp;&nbsp;&nbsp;&nbsp;<input className="su1" type="text" placeholder="Your name here" /></p><br/><br/>
                    <p>Email ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="su2" type="email" placeholder="Your email here" /></p><br/><br/>
                    <p>Phone No.:&nbsp;&nbsp;&nbsp;<input className="su3" type="text" placeholder="Your phone no. here" /></p><br/><br/>
                    <p>Enter Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="su4" type="text" placeholder="Enter your password" /></p><br/><br/>
                    <p>Confirm Password:&nbsp;<input className="su5" type="text" placeholder="Confirm your password" /></p><br/><br/>
                    <button className="signupsubmit" onClick={handleClick}>Sign-Up</button>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;