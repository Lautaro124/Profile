import React from 'react'
import Card from '../card/Card'
import { useSelector } from 'react-redux'
import { Button, Typography  } from '@mui/material'
import { Link } from 'react-scroll'
import styles from '../../styles/default.module.css'

export default function Home() {

    /*
        Constante que recibe el valor del estado project
    */
    const projects = useSelector(state => state.project)

    return (
        <div className={styles.projectContent}>
            <section id='page1' className={styles.cardContent}>
                <div className={styles.titleproject}>
                    <Typography variant='h2'>Mis proyectos</Typography>

                    <Link to='page2' spy={true} smooth={true} delay={80}>
                        <Button>Ver Primer proyecto</Button>
                    </Link>
                </div>
            </section>
            {
                projects?.map((project, index) => 
                    <Card
                        key={index} 
                        title={project.title} 
                        description={project.description}
                        img={project.img} 
                        colaborations={project.colaborations}
                        index={index}/>
                )
            }
        </div>
    )
}
