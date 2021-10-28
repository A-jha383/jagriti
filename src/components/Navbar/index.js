import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/Contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/Events" activeStyle>
                    Event
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;