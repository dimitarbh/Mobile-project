import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to='/' end></NavLink>
            <NavLink to='/about'></NavLink>
        </nav>
    )
}

export default Navigation;