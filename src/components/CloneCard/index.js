import React from 'react';
import './CloneCard.css'


const CloneCard = (props) =>{
return(
    <div data-aos={props.anim} className='cardFlex'>
<img src={props.link} alt='' style={{height: "200px"}}></img>
<h2 style={{height: "100px"}}>{props.header}</h2>

<h3>{props.language}</h3>
<p style={{height: "50px", marginBottom: "30px"}}>{props.languages}</p>
<div className='buttonRow'>
<div>{props.button}</div>
<div>{props.button2}</div></div>

</div>
)
}


export default CloneCard