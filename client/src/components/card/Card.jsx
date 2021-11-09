import React from 'react'
import styles from '../../styles/default.module.css'
import { Button, Typography  } from '@mui/material'
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'

export default function Card({index, title, description, img, colaborations}) {

    const array = useSelector(state => state.project)

    return (
        <section id={`page${index + 2}`} className={styles.cardContent}>

            <div className={styles.cardTitles}>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='span'>{description}</Typography>
            </div>
            <img className={styles.cardImg} src={img} alt= 'None'/>
            <div className={styles.cardReference}>
                <h6>{colaborations}</h6>
            </div>

            <div className={styles.cardButtons}>
                <Link to={`page${index + 1}`} spy={true} smooth={true} delay={80}>
                    <Button>{'<-- '}Back</Button>
                </Link>
                <Link to={`page1`} spy={true} smooth={true} delay={80}>
                    <Button>Inicio</Button>
                </Link>
                {
                    array.length !== index + 1?
                    <Link to={`page${index + 3}`} spy={true} smooth={true} delay={80}>
                        <Button>Next{' -->'}</Button>
                    </Link>: 
                    <Link to='contact' spy={true} smooth={true} delay={80}>
                        <Button>Next{' -->'}</Button>
                    </Link>  
                }
            </div>

        </section>
    )
}
