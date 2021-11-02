import React from 'react'

export default function Card({title, description, img, colaborations}) {
    return (
        <div>
            <h3>{title}</h3>
            <img src={img} alt= 'None'/>
            <span>{description}</span>
            <h6>{colaborations}</h6>
        </div>
    )
}
