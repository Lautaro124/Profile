import React from 'react'
import { Link } from 'react-scroll'
import defaults from '../../styles/default.module.css'
import styles from '../../styles/landing.module.css'

export default function LandingPage() {
    return (
        <section id="landing-page" className={styles.content}>
            <h1 className={styles.title} >Bienvenido a mi portafolio</h1>
            <h3 className={styles.subtitle} >Me llamo lautaro Gonzalez y soy desarrollador full stack</h3>
            <Link to='page1' spy={true} smooth={true} delay={80}>
                <button variant='contained' className={defaults.links}>
                    About me
                </button>
            </Link>
        </section>
    )
}
