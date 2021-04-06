import React from 'react'
import Card from '../Card'
import './Portfolio.css'
import { STACKS } from "../Data"
import Button from '../Button'
import GitButton from '../GitButton'

export default function Portfolio(props) {
    return (
        <div className='portfolioContainer' id='portfolio'>
            <div>
                <h2 className='portfolioHeader'>Portfolio</h2>
                <h3 className='experience'>Experience</h3>
                <h4>Stutern Graduate Accelerator</h4>
                <h5>Software Developer</h5></div>
            <div><h3>Projects</h3><p>A couple of projects that I've built in the past. I'm learning a ton right now, so you can expect more to appear soon!
</p>
            </div>
            <div className='cardRow'>
                <Card tasks={STACKS} link="fas fa-calculator" header='Simple Calculator' text='Allows you perform arithmetic operations on numbers. Operations like addition, subtraction, multiplication, division and percentage.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://simplearithcalculator.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/SimpleCalculator.git/' icon='fab fa-github' />} />
                <Card tasks={STACKS} link="fas fa-road" header='Distance Converter' text='A simple converter which allows you convert units of length. Simply enter the units you have and press convert. Distance Length converter will do the rest!.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://distance-coverter.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Distance-converter.git' icon='fab fa-github' />} />
                <Card tasks={STACKS} link="fas fa-money-check-alt" header='Budget Tracker' text=' Project budget tracking enables you to monitor how much of your budget has been spent over time, to see how much is remaining and course-correct.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://speckerbudgettracker.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Budget-tracker.git' icon='fab fa-github' />} />
            </div>
        </div>
    )
}