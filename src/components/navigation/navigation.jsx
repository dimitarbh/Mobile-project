import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navigation.css"; // Import the CSS file

const Navigation = () => {
    return (
        <nav>
            <NavLink to='/' end className="nav-link">Home</NavLink>
            <NavLink to='/news' className="nav-link">News</NavLink>
            <NavLink to='/reviews' className="nav-link">Reviews</NavLink>
            <NavLink to='/deals' className="nav-link">Deals</NavLink>
            <NavLink to='/contact' className="nav-link">Contact</NavLink>
        </nav>
    );
}

export default Navigation;
