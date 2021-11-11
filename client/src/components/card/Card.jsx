import React from 'react'
import styles from '../../styles/default.module.css'
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'

export default function Card({index, title, description, img, colaborations}) {

    // Traer el array para saber cuando se llego al final de este mismo
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
            {/* 
                Links para seguir la vista 
            */}
            <div className={styles.cardButtons}>
                <Link to={`page${index + 1}`} spy={true} smooth={true} delay={80}>
                    <button className={styles.links} >{'<-- '}Back</button>
                </Link>
                <Link to={`landing-page`} spy={true} smooth={true} delay={80}>
                    <button className={styles.links} >Inicio</button>
                </Link>
                {
                    array.length !== index + 1?
                    <Link to={`page${index + 3}`} spy={true} smooth={true} delay={80}>
                        <button className={styles.links} >Next{' -->'}</button>
                    </Link>: 
                    <Link to='contact' spy={true} smooth={true} delay={80}>
                        <button className={styles.links} >Next{' -->'}</button>
                    </Link>  
                }
            </div>

        </section>
    )
}
