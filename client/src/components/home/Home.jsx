import React from 'react'
import Card from '../card/Card'
import { useSelector } from 'react-redux'
import styles from '../../styles/Default.module.css'

export default function Home() {

    /*
        Constante que recibe el valor del estado project
    */
    const projects = useSelector(state => state.project)

    return (
        <div className={styles.content}>
            <h1>Projects</h1>
            {
                projects?.map(project => 
                    <Card 
                        title={project.title} 
                        description={project.description}
                        img={project.img} 
                        colaborations={project.colaborations}/>
                )
            }
        </div>
    )
}
