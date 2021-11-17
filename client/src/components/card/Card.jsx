import React from 'react'
import styles from '../../styles/default.module.css'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { Link } from 'react-scroll'
import { useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

export default function Card({index, title, description, img, colaborations}) {

    // Traer el array para saber cuando se llego al final de este mismo
    const array = useSelector(state => state.project)

    const images = JSON.parse(img)
    const people = JSON.parse(colaborations)

    return (
        <section id={`page${index + 2}`} className={styles.cardContent}>

            <div className={styles.cardTitles}>
                <h2 data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">{title}</h2>
                <div data-aos="zoom-out-up" data-aos-delay="100" data-aos-duration="1000" className={styles.cardDescription} dangerouslySetInnerHTML={{__html:description}}>
                </div>
            </div>
            <div data-aos="flip-right" data-aos-delay="100" data-aos-duration="1000" className={styles.cardImg}>
                <AwesomeSlider>
                    {
                        images?.map((e, i) => <div key={i} data-src={e}></div>)
                    }
                </AwesomeSlider>
            </div>
            <div  data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" className={styles.cardReference}>
                {
                    people?.map(e => 
                        
                        <h4>Linkedin: <a href={e.link}>{e.names}</a> </h4>                
                        
                    )
                }
            </div>
            {/* 
                Links para seguir la vista 
            */}
            <div className={styles.cardButtons}>
                <Link to={`page${index + 1}`} spy={true} smooth={true} delay={80}>
                    <button className={styles.links} >{'<-- '}Back</button>
                </Link>
                <Link to={`landing-page`} spy={true} smooth={true} delay={80}>
                    <button className={styles.links} >Inicio</button>
                </Link>
                {
                    array.length !== index + 1?
                    <Link to={`page${index + 3}`} spy={true} smooth={true} delay={80}>
                        <button className={styles.links} >Next{' -->'}</button>
                    </Link>: 
                    <Link to='contact' spy={true} smooth={true} delay={80}>
                        <button className={styles.links} >Next{' -->'}</button>
                    </Link>  
                }
            </div>

        </section>
    )
}
