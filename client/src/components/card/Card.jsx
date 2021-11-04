import React from 'react'
import styles from '../../styles/default.module.css'
import { Button, Typography  } from '@mui/material'
import { Link } from 'react-scroll'

export default function Card({index, title, description, img, colaborations}) {

    return (
        <section id={`page${index + 2}`} className={styles.cardContent}>

            <Typography variant='h5'>{title}</Typography>
            <img src={img} alt= 'None'/>
            <Typography variant='span'>{description}</Typography>
            <h6>{colaborations}</h6>

            <Link to={`page${index + 1}`} spy={true} smooth={true} delay={80}>
                <Button>Back</Button>
            </Link>

            <Link to={`page${index + 3}`} spy={true} smooth={true} delay={80}>
                <Button>Next</Button>
            </Link>

        </section>
    )
}
