import React from 'react'
import './Card.css'


export default function Card(props) {
  return (
    <div className='cardFlex'>
      <div className='iconClass'><i className={props.link}></i></div>
      <h2>{props.header}</h2>
      <p>{props.text}</p>
      <h3>{props.language}</h3>
      <p>{props.languages}</p>

      <h3>{props.tool}</h3>
      {props.tasks.map(data => {
        return (
          <div key={data.language}>
            <li>{data.language}</li>
          </div>
        );
      })}
      <div className='buttonRow'>
        <div>{props.button}</div>
        <div>{props.button2}</div></div>
    </div>
  )
}

