import React from 'react'
import './GitButton.css'

export default function GitButton(props) {
    return (
        <a href={props.link} title={props.title} className={props.className} target="_blank" rel="noreferrer"><i className={props.icon}></i></a>
    )
}