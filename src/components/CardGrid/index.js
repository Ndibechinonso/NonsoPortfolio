import React from 'react'
import './CardGrid.css'
import Card from '../Card'
import { TOOLS, SOFTTOOLS } from '../Data'


export default function CardGrid(props) {
    return (
        <div className='cardsDiv'><Card tasks={SOFTTOOLS} link='fas fa-code' header='Web Developer' text="Building beautiful, functional &  responsive sites. I'm currently focusing solely on the front-end." language='Languages' languages='HTML, CSS, JavaScript, ReactJS' tool='Tools and Frameworks' />
            <Card tasks={TOOLS} link="fas fa-images" header='Digital Artist' text='Creating minimal designs that are visually appealing to users.' language='What I Enjoy' languages='Web, Photoshop, Nature' tool='Tools' /></div>
    )
}