import React from 'react'
import './GitButton.css'

export default function GitButton(props) {
    return (
        <a href={props.link} className={props.className} ><i className={props.icon}></i></a>
    )
}