import React from 'react'
import styles from '../../styles/default.module.css'
import { Link } from 'react-scroll'

export default function Contact() {
  return (
    <section id="contact" className={styles.titleContent}>
      <h1>Contact me</h1>

      <div>
        <h3>Linkedin</h3>
        <h3>Gmail</h3>
        <h3>Celular</h3>
      </div>

      <Link to='page0' spy={true} smooth={true} delay={80}>
        <button>
          Inicio
        </button>
      </Link>
    </section>
  )
}
