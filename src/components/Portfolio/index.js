import React, { useEffect } from 'react'
import Card from '../Card'
import './Portfolio.css'
import { STACKS } from "../Data"
import Button from '../Button'
import GitButton from '../GitButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio(props) {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })
    return (
        <div className='portfolioContainer' id='portfolio'>
            <div data-aos='fade-up'>
                <div className='portfolioDiv'> <h2 className='portfolioHeader'>PORTFOLIO</h2></div>
                <h3 className='experience'>Experience</h3>
                <h4>Stutern Graduate Accelerator</h4>
                <h5>Software Developer</h5></div>
            <div data-aos='fade-up'><h3>Projects</h3><p>A couple of projects that I've built in the past. I'm learning a ton right now, so you can expect more to appear soon!</p>
            </div>

            <div className='cardRow'>
                <Card anim='fade-right' tasks={STACKS} link="fas fa-calculator" header='Simple Calculator' text='Allows you perform arithmetic operations on numbers. Operations like addition, subtraction, multiplication, division and percentage.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://simplearithcalculator.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/SimpleCalculator.git/' icon='fab fa-github' />} />
                <Card anim='flip-right' tasks={STACKS} link="fas fa-road" header='Distance Converter' text='A simple converter which allows you convert units of length. Simply enter the units you have and press convert. Distance Length converter will do the rest!.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://distance-coverter.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Distance-converter.git' icon='fab fa-github' />} />
                <Card anim='fade-left' tasks={STACKS} link="fas fa-money-check-alt" header='Budget Tracker' text=' Project budget tracking enables you to monitor how much of your budget has been spent over time, to see how much is remaining and course-correct.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://speckerbudgettracker.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Budget-tracker.git' icon='fab fa-github' />} />
            </div>

            <div data-aos='fade-up' className='currentProject'><h3>Current project</h3><p>I am currently working on a music lifestyle app with a team of 3 UI/UX Designers and a Data Scientist. This app is currently under construction but you can check it out on a desktop to view it's progress and also don't forget to drop your feedback.</p>
            </div>

            <div className='cardRow'>
                <Card anim='zoom-in-up' tasks={STACKS} link="fas fa-headphones" header='Deezify' text="Deezify is a streaming analysis and music discovery tool for Deezer users built on Deezer's web API" language='Tech Stack' languages='ReactJs, React-Redux, ExpressJs, MongoDB' button={<Button text='Check it out' className='linkButton' link='https://do-re-me.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/music-app.git' icon='fab fa-github' />} />
            </div>
        </div>
    )
}