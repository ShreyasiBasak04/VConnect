import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>V-CONNECT</h2>
            <div className="links">
                <Link to="/">Dashboard</Link>
                <Link to="/signup">Sign-Up</Link>
                <Link to="/signin">Sign-In</Link>
            </div>
    
        </div>
     );
}
 
export default Navbar;