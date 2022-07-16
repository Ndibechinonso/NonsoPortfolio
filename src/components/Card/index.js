import React from "react";
import "./Card.css";

export default function Card(props) {


  return (
    <div data-aos={props.anim} className="cardFlex">
      <div className="iconClass">
        <i className={props.link}></i>
      </div>
      <h2 style={{height: "70px"}}>{props.header}</h2>
      <p style={{height: `${props.portfolio ? "170px" : "70px"}`}}>{props.text}</p>
      <h3>{props.language}</h3>
      <p style={{height: `${props.certification ? '100px': '70px'}`}}>{props.languages}</p>

      <h3>{props.tool}</h3>
      {props.tasks ? <div style={{height: "50px"}}>
      {props.tasks.map((data) => {
        return (
          <div key={data.language} >
            <li>{data.language}</li>
          </div>
        );
      }) }</div> : null }
     {props.certification &&  (<div className="certDiv">
        <h3>{props.certification}</h3>
      </div>) }
      <div className="buttonRow">
        {props.button && (<div>{props.button}</div>)}
        <div>{props.button2}</div>
      </div>
    </div>
  );
}
