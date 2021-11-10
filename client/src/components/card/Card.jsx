import React from 'react'
import styles from '../../styles/default.module.css'
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'

export default function Card({index, title, description, img, colaborations}) {

    const array = useSelector(state => state.project)

    return (
        <section id={`page${index + 2}`} className={styles.cardContent}>

            <div className={styles.cardTitles}>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            <img className={styles.cardImg} src={img} alt= 'None'/>
            <div className={styles.cardReference}>
                <h6>{colaborations}</h6>
            </div>

            <div className={styles.cardButtons}>
                <Link to={`page${index + 1}`} spy={true} smooth={true} delay={80}>
                    <button>{'<-- '}Back</button>
                </Link>
                <Link to={`landing-page`} spy={true} smooth={true} delay={80}>
                    <button>Inicio</button>
                </Link>
                {
                    array.length !== index + 1?
                    <Link to={`page${index + 3}`} spy={true} smooth={true} delay={80}>
                        <button>Next{' -->'}</button>
                    </Link>: 
                    <Link to='contact' spy={true} smooth={true} delay={80}>
                        <button>Next{' -->'}</button>
                    </Link>  
                }
            </div>

        </section>
    )
}
