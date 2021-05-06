import React, {useEffect} from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(props) {

    useEffect(()=>{
        AOS.init({
            duration : 1000
          })
        })

    return (
        <section  id='about'>
            <div data-aos='fade-up' className='aboutContainer'>
                <h2>About </h2>
                <p>Hey there, I'm Nonso! I'm a passionate developer and digital artist from Nigeria. I decided to switch career in 2020 to become a Software Engineer and now I am addicted to the new life, I hope to use this platform to document every experience on a quest to exploring the world of Software development</p>
            </div>  </section>
    )
}
