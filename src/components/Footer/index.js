import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <footer id='footer'>
            <div className='footerContainer'>
                <p>Copyright © 2021 <span><a href='#navbar'>Nonso Ndibe.</a></span></p>
                <ul className='socialLinks'>
                    <li><a href='https://www.instagram.com/edwardkolbe/'><i className="fab fa-instagram"></i></a></li>
                    <li><a href='https://twitter.com/pavlovpiper'><i className="fab fa-twitter"></i></a></li>
                    <li><a href='https://linkedin.com/in/ndibechinonso'><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href='https://github.com/Ndibechinonso'><i className="fab fa-github"></i></a></li>
                    <li><a href="mailto:edwardndibe@yahoo.com?subject = Feedback&body = Message"><i className="fas fa-at"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer