import React, {useState} from "react"
import { Link, NavLink } from "react-router-dom"
import './index.scss'

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to="/" className = "title" >Website</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/industrial">Industrial</NavLink>
                </li>
                <li>
                    <NavLink to="/household">HouseHold</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}