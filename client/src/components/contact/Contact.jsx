import React from 'react'
import styles from '../../styles/default.module.css'
import { Link } from 'react-scroll'

export default function Contact() {
  return (
    <section id="contact" className={styles.contactContent}>
      <h1 className={styles.contactTitle}>Contactarme</h1>

      <div className={styles.contactData}>
        <h3>Linkedin: <a href="https://www.linkedin.com/in/lautaro-gabriel-gonzalez">Lautaro Gonzalez</a></h3>
        <h3>Gmail: <a href="https://www.linkedin.com">lautaro.gonzalez4949@gmail.com</a></h3>
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
