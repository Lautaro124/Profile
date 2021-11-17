import React from 'react'
import styles from '../../styles/default.module.css'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

export default function Contact() {
  return (
    <section id="contact" className={styles.contactContent}>
      <h1 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className={styles.contactTitle}>Contactarme</h1>

      <div data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="1000" className={styles.contactData}>
        <h3>Linkedin: <a href="https://www.linkedin.com/in/lautaro-gabriel-gonzalez">Lautaro Gonzalez</a></h3>
        <h3>Gmail: lautaro.gonzalez4949@gmail.com</h3>
        <h3>Celular: 1163218781</h3>
      </div>

      <Link to='landing-page' spy={true} smooth={true} delay={80} className={styles.contactBack}>
        <button className={styles.links}>
          Inicio
        </button>
      </Link>
    </section>
  )
}
