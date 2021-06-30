import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <a href={props.link} className={props.className} target="_blank" rel="noopener" type={props.type}>{props.text}</a>
    )
}