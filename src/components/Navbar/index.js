import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar(props) {
    return (
        // <div className='navbarContainer' id='navbar'>
            <div className='navbar'>
                <div className='name'><a href='#navbar'>Ndibe Nonso.</a></div>
                <div className='links'>
                    <div className='about'><a href='#anime'>ABOUT</a></div> <div className='portfolio'><a href='#portfolio'>PORTFOLIO</a></div><div className='contact'><a href='#footer'>CONTACT</a></div>  </div>
            
            </div>
            // </div>
    )
}