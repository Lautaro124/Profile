import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography  } from '@mui/material'
import styles from '../../styles/default.module.css'

export default function LandingPage() {
    return (
        <div className={styles.content}>
            <Typography variant='h2'>Bienvenidos a mi portafolio</Typography>
            <Link to='/Home' className={styles.links}>
                <Button variant='contained' className={styles.links}>
                    Iniciar Recorrido
                </Button>
            </Link>
        </div>
    )
}
