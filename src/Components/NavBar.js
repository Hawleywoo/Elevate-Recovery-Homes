import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar__menu">
                <li >
                    <Link className="links" to="/" >Home</Link>
                    <SubMenu>
                        
                    </SubMenu>
                </li>
                <li >
                    <Link className="links" to="/about">About us</Link>
                </li>
                <li >
                    <Link className="links" to="/our-houses">Our Houses</Link>
                </li>
                <li >
                    <Link className="links" to="/why-us">About us</Link>
                </li>
                <li >
                    <Link className="links" to="/faq">FAQ</Link>
                </li>
                <li >
                    <Link className="links" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
