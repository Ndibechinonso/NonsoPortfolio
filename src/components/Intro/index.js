import React from 'react'
import './Intro.css'
import Button from '../Button'
import nonso from '../../Assets/nonso.jpg'


export default function Intro(props) {


  return (
    <div  className='introGrid' id='intro'>
      <div className='infoText'>
        <div className='infoHeader'>
          <h1>Software Developer</h1>
        </div>
        <div className='infoDesc'>
          <p>Hello, I'm Nonso - A Software Developer with an expertise in Frontend Engineering and Development. I love learning and experimenting different stacks. I love writing clean codes with a component based orientation</p>
        </div>
        <div className='infoButtons'>
          <Button className='learnMore' text='Learn More' link='#about' self/>
          <Button className='contactButton' text='Get In Touch' link='#footer' self/>
        </div>
      </div>
    <div className='imgDiv'> <div className='frame'><img src={nonso} alt='nonso'/></div></div> 
    </div>
  )
}