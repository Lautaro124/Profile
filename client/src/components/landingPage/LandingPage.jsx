import React from 'react'
import { Link } from 'react-scroll'
import defaults from '../../styles/default.module.css'
import styles from '../../styles/landing.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

export default function LandingPage() {
    return (
        <section id="landing-page" className={styles.content}>
            <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className={styles.title} >Bienvenido a mi portafolio</h1>
            <h3 data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="1000" className={styles.subtitle} >Me llamo Lautaro y soy desarrollador Full Stack</h3>
            <Link to='page1' spy={true} smooth={true} delay={80}>
                <button className={defaults.links}>
                    About me
                </button>
            </Link>
        </section>
    )
}
