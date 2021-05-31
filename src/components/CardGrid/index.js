import React, {useEffect} from 'react'
import './CardGrid.css'
import Card from '../Card'
import GitButton from '../GitButton'
import { TOOLS, SOFTTOOLS } from '../Data'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CardGrid(props) {
    useEffect(()=>{
        AOS.init({
            duration : 1000
          })
        })

    return (
        <div data-aos='fade-up' className='cardsDiv' id='cardsDiv'><Card tasks={SOFTTOOLS} link='fas fa-code' header='Web Developer' text="Building beautiful, functional &  responsive sites. I'm currently focusing solely on the front-end." language='Languages' languages='HTML, CSS, JavaScript, ReactJS' tool='Tools and Frameworks' certification='Certifications' button2={<GitButton className='gitButton' link='https://www.freecodecamp.org/certification/maxkolbe/responsive-web-design' icon='fab fa-free-code-camp' />} />
            <Card tasks={TOOLS} link="fas fa-images" header='Digital Artist' text='Creating minimal designs that are visually appealing to users.' language='What I Enjoy' languages='Web, Photoshop, Nature' tool='Tools' certification='Certifications' button2={<GitButton className='gitButton' link='https://drive.google.com/file/d/1DaWX34hsatfuEweTGodkxxQXZrg3Rm7n/view?usp=sharing' icon='fab fa-google-drive' />} /></div>
    )
}
