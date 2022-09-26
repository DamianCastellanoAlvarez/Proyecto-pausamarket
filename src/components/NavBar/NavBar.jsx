import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import logo from '../../assets/Logo.png'
import { Link } from "react-router-dom"
import '../NavBar/NavBar.css'
import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className='navb'>
            <div>
                <Link to='/ItemListContainer'><img src={logo} alt="logo"  className="logo" /></Link>
            </div>
        <div className='d-flex justify-content-end barra'>
        <Nav tabs>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
            <Link to="/">Productos</Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem enabled><Link className='barra' to='/productos/yerbas' >Yerba</Link></DropdownItem>
                <DropdownItem enabled><Link className='barra' to='/productos/stevia'>Stevia</Link></DropdownItem>
                <DropdownItem enabled><Link className='barra' to='/productos/te'>Te</Link></DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <NavItem>
            <NavLink href='/blog'>Blog</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/contacto'>Contacto</NavLink>
            </NavItem>
            
            <Link to="/cart"> <CartWidget /> </Link>
            
            
        </Nav>

        
    <div>
        
        
    </div>
    </div>
    </div>
    )
}

export default NavBar;