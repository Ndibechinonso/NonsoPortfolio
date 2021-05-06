import React from 'react'
import './Intro.css'
import Button from '../Button'
import nonso from '../../nonso.jpg'


export default function Intro(props) {


  return (
    <div  className='introGrid'>
      <div className='infoText'>
        <div className='infoHeader'>
          <h1> Front-End Engineer and Digital Artist.</h1>
        </div>
        <div className='infoDesc'>
          <p> My platform which documents my journey to becoming a Full Stack Developer, also displaying my projects</p>
        </div>
        <div className='infoButtons'>
          <Button className='learnMore' text='Learn More' link='#about' />
          <Button className='contactButton' text='Get In Touch' link='#footer' />
        </div>
      </div>
      <div className='imgDiv'><img src={nonso} alt='nonso'/></div>
    </div>
  )
}