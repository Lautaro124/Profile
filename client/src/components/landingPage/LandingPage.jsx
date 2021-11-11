import React from 'react'
import { Link } from 'react-scroll'
import styles from '../../styles/default.module.css'

export default function LandingPage() {
    return (
        <section id="landing-page" className={styles.titleContent}>
            <h1>Bienvenido a mi portafolio</h1>
            <h4>Me llamo lautaro Gonzalez y soy un desarrollador full stack</h4>
            <Link to='page1' spy={true} smooth={true} delay={80}>
                <button variant='contained' className={styles.links}>
                    About me
                </button>
            </Link>
        </section>
    )
}
