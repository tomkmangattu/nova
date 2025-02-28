import  {useState} from "react"
import { Link, NavLink } from "react-router-dom"
import './index.scss'

export const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to="/nova/" className = "title" >Website</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/nova/industrial" onClick={() => setMenuOpen(!menuOpen)}>Industrial</NavLink>
                </li>
                <li>
                    <NavLink to="/nova/household" onClick={() => setMenuOpen(!menuOpen)}>HouseHold</NavLink>
                </li>
                <li>
                    <NavLink to="/nova/about" onClick={() => setMenuOpen(!menuOpen)}>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}