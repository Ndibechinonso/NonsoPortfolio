import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <a href={props.link} className={props.className} target={`${props.self ? "_self" : "_blank"}`} rel="noreferrer" type={props.type}>{props.text}</a>
    )
}