import React from 'react'
import Card from '../card/Card'
import LandingPage from '../landingPage/LandingPage'
import Contact from '../contact/Contact'
import { useSelector } from 'react-redux'
import About from '../about/About'
import styles from '../../styles/default.module.css'
import Nav from '../navBar/Nav'

export default function Home() {

    /*
        Constante que recibe el valor del estado project
    */
    const projects = useSelector(state => state.project)

    return (
        <div className={styles.projectContent}>
            <Nav />
            
            <LandingPage/>
            <section id='about' className={styles.titleContent}>
                <About/>
            </section>
            <section id='web'>
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
            </section>
            <Contact/>
        </div>
    )
}
