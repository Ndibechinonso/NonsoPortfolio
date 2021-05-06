import React from 'react';
import './CloneCard.css'


const CloneCard = (props) =>{
return(
    <div data-aos={props.anim} className='cardFlex'>
<img src={props.link} alt=''></img>
<h2>{props.header}</h2>

<h3>{props.language}</h3>
<p>{props.languages}</p>
<div className='buttonRow'>
<div>{props.button}</div>
<div>{props.button2}</div></div>

</div>
)
}


export default CloneCard