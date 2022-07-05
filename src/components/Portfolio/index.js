import React, { useEffect } from 'react'
import Card from '../Card'
import './Portfolio.css'
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

                <h4>Sterling Bank PLC</h4>
                <div className='job-title'><h5>Frontend Engineer</h5> <h5>12/2021 till date</h5></div>
                <h4>Pagefly</h4>
                <div className='job-title'><h5>Frontline Support</h5> <h5>10/2021 till date</h5></div>
                <h4>Quabbly</h4>
                <div className='job-title'><h5>Frontend Engineer</h5> <h5>07/2021 - 10/2021</h5></div>

                <h4>Stutern Graduate Accelerator</h4>
               <div className='job-title'><h5>Software Developer</h5><h5>01/2020 - 07/2021</h5></div>
               </div>
                
            <div data-aos='fade-up'><h3 className='projectHeader'>Projects</h3>
            </div>
{/* 
            <div data-aos='fade-up' className='currentProject'>
                <h3>Current project</h3>
                <p>I am currently restructuring this music lifestyle app built with a team of 3 UI/UX Designers and a Data Scientist. This app is currently under construction but you can check it out on a desktop to view it's progress and also don't forget to drop your feedback.</p>
            </div> */}

            <div className='cardRow'>
                <Card anim='zoom-in-up' link="fas fa-user-group" header='PTEN' text="PTEN is a full stack app I am currently building for a client in the UK" language='Tech Stack' languages='ReactJs, React-Redux, ExpressJs, MongoDB' />
            </div>

            <p className='oldProjects'>A couple of personal projects that I've built in the past. I'm learning a ton right now, so you can expect more to appear soon!</p>
            <div className='cardRow'>
            <Card anim='zoom-in-up'  link="fas fa-prescription" header='Nemitt Website' text="Nemmit is an indigenous pharmaceutical company engaged in wholesales of Pharmaceutical products. The company officially started operations in April 1999" language='Tech Stack' languages='NextJs, TailwindCSS' button={<Button text='Check it out' className='linkButton' link='https://nemittpharm.com.ng/' />} button2={<GitButton className='gitButton' link='https://www.figma.com/file/AGTorInpc5jlcVRbwiKDg1/Nemitt-Pharmaceuticals?node-id=614%3A3386' icon='fab fa-figma' />} />
                <Card anim='zoom-in-up'  link="fas fa-headphones" header='Deezify' text="Deezify is a streaming analysis and music discovery tool for Deezer users built on Deezer's web API" language='Tech Stack' languages='ReactJs, React-Redux, ExpressJs, MongoDB' button={<Button text='Check it out' className='linkButton' link='https://do-re-me.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/music-app.git' icon='fab fa-github' />} />
                <Card anim='fade-right'  link="fas fa-calculator" header='Simple Calculator' text='Allows you perform arithmetic operations on numbers. Operations like addition, subtraction, multiplication, division and percentage.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://simplearithcalculator.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/SimpleCalculator.git/' icon='fab fa-github' />} />
                <Card anim='flip-right'  link="fas fa-road" header='Distance Converter' text='A simple converter which allows you convert units of length. Simply enter the units you have and press convert. Distance Length converter will do the rest!.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://distance-coverter.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Distance-converter.git' icon='fab fa-github' />} />
                <Card anim='fade-left'  link="fas fa-money-check-alt" header='Budget Tracker' text=' Project budget tracking enables you to monitor how much of your budget has been spent over time, to see how much is remaining and course-correct.' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://speckerbudgettracker.netlify.app/' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Budget-tracker.git' icon='fab fa-github' />} />
            </div>

           
        </div>
    )
}