import React, {useEffect} from 'react'
import './Clones.css'
import CloneCard from '../CloneCard'
import unsplashApi from '../../Assets/unsplashApi.png'
import flutterwave from '../../Assets/flutterwave.png'
import pinterest from '../../Assets/pinterest.png'
import shionHouse from '../../Assets/shionHouse.png'
import googleStadia from '../../Assets/googleStadia.png'
import fcc from '../../Assets/fcc.png'
import GitButton from '../GitButton'
import Button from '../Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clones = (props) =>{
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    })
    return(
        <div className='clones'>
            <h2 data-aos='fade-right'>Clones</h2>
        <p data-aos='fade-left'>In order to improve my skills I try to recreate existing works; user interfaces (UIs) as closely as possible.</p>
        <div className='cloneCardContainer'>
        <CloneCard anim='fade-up' link={unsplashApi} header='Cowrywise Frontend Engineer Test' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://myunsplash-api-clone.netlify.app' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/UNSPLASH-API.git' icon='fab fa-github' />} />
        <CloneCard anim='fade-up' link={shionHouse} header='Shion House(old) Clone' language='Tech Stack' languages='HTML, CSS, Bootstrap' button={<Button text='Check it out' className='linkButton' link='https://shion-house-fashion-clone.netlify.app' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/fashion-bootstrap.git' icon='fab fa-github' />} />
        <CloneCard anim='fade-up' link={fcc} header='FCC Landing Page Clone' language='Tech Stack' languages='HTML, CSS' button={<Button text='Check it out' className='linkButton' link='https://fcc-original-trombones.netlify.app' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/LANDING-PAGE.git' icon='fab fa-github' />} />

        <CloneCard anim='fade-up' link={flutterwave} header='Flutterwave Clone' language='Tech Stack' languages='HTML, CSS, JavaScript, Bootstrap' button={<Button text='Check it out' className='linkButton' link='https://flutterwave.netlify.app' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/flutterwave-app.git' icon='fab fa-github' />} />
        <CloneCard anim='fade-up' link={pinterest} header='Pinterest Clone(old)' language='Tech Stack' languages='HTML, CSS, JavaScript' button={<Button text='Check it out' className='linkButton' link='https://pinterest-mockup.netlify.app' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Pinterest-mockup.git' icon='fab fa-github' />} />
        <CloneCard anim='fade-up' link={googleStadia} header='GoogleStadia Clone' language='Tech Stack' languages='CSS, ReactJS' button={<Button text='Check it out' className='linkButton' link='https://google-stadia-clone.netlify.app' />} button2={<GitButton className='gitButton' link='https://github.com/Ndibechinonso/Budget-tracker.git' icon='fab fa-github' />} />
       
        </div>
        </div>
    )
}

export  default Clones