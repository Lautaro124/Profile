import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/default.module.css'

export default function LandingPage() {
    return (
        <div className={styles.content}>
            <h1>Bienvenidos a mi portafolio</h1>
            <Link to='/Home'>Iniciar Recorrido</Link>
        </div>
    )
}
