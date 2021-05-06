import React, { useState } from 'react';
import './Navbar.css'

export default function Navbar(props) {
    return (
        <div className='navbarContainer' id='navbar'>
            <div className='navbar'>
                <div className='name'><a href='#navbar'>Ndibe Nonso.</a></div>
                <div className='links'>
                    <div className='about'><a href='#about'>About</a></div> <div className='portfolio'><a href='#portfolio'>Portfolio</a></div><div className='contact'><a href='#footer'>Contact</a></div>  </div>
            </div></div>
    )
}