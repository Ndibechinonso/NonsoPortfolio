import React from 'react'
import Navbar from '../Navbar'
import Intro from '../Intro'
import About from '../About'
import CardGrid from '../CardGrid'
import Portfolio from '../Portfolio'
import Footer from '../Footer';
import Animation from '../Animation'
const Body = (props) => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Animation />
            <About />
            <CardGrid />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Body