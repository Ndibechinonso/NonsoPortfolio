import React, { useEffect } from 'react'
import './CardGrid.css'
import Card from '../Card'
import GitButton from '../GitButton'
import { TOOLS, SOFTTOOLS, DEVTOOLS } from '../Data'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CardGrid(props) {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div data-aos='fade-up' className='cardsDiv' id='cardsDiv'>
            <Card tasks={DEVTOOLS} link='fas fa-laptop-code' header='Software Developer' text="I also love building APIs and servers for web applications." language='Languages' languages='NodeJs, MongoDb' tool='Tools and Frameworks' certification='Certifications' button={<GitButton className='gitButton' title='Js Algorithms and Data Structures' link='https://www.freecodecamp.org/certification/maxkolbe/javascript-algorithms-and-data-structures' icon='fab fa-free-code-camp' />}  button2={<GitButton className='gitButton' title='Backend Development and APIs' link='https://www.freecodecamp.org/certification/maxkolbe/back-end-development-and-apis' icon='fab fa-free-code-camp' />} />
            <Card tasks={SOFTTOOLS} link='fas fa-code' header='Web Developer' text="Building beautiful, functional & responsive websites." language='Languages' languages='HTML, CSS, SASS, SCSS, TailwindCSS, TypeScrript, JavaScript, ReactJS, Angular' tool='Tools and Frameworks' certification='Certifications' button={<GitButton className='gitButton' title='Responsive Web Designs' link='https://www.freecodecamp.org/certification/maxkolbe/responsive-web-design' icon='fab fa-free-code-camp' />} button2={<GitButton className='gitButton' title='Frontend Libraries' link='https://www.freecodecamp.org/certification/maxkolbe/front-end-development-libraries' icon='fab fa-free-code-camp' />} />
            <Card tasks={TOOLS} link="fas fa-images" header='Digital Artist' text='Creating minimal designs that are visually appealing to users.' language='What I Enjoy' languages='Web, Photoshop, Nature' tool='Tools' certification='Certifications' button2={<GitButton className='gitButton' title='Adobe Photoshop CC' link='https://drive.google.com/file/d/1DaWX34hsatfuEweTGodkxxQXZrg3Rm7n/view?usp=sharing' icon='fab fa-google-drive' />} />
        </div>
    )
}
