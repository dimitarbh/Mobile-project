import { NavLink } from "react-router-dom";
import "./navigation.css"; 

const Navigation = () => {
    return (
        <nav>
            <NavLink to='/' end className="nav-link">Home</NavLink>
            <NavLink to='/news' className="nav-link">News</NavLink>
            <NavLink to='/reviews' className="nav-link">Reviews</NavLink>
            <NavLink to='/deals' className="nav-link">Deals</NavLink>
            <NavLink to='/about-us' className="nav-link">About Us</NavLink>
        </nav>
    );
}

export default Navigation;
