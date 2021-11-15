import React from 'react'
import { Link } from 'react-scroll'
import styles from '../../styles/about.module.css'
import defaults from '../../styles/default.module.css'

export default function About() {
  return (
    <div className={styles.content}>
      <div className={styles.firstColumn}>
        <h2>Acerca de mi</h2>
        <span className={styles.span}>
        <b>📢 Quien soy? 👀<br/></b>
          🌟 Estoy interesado en el desarrollo Full stack.<br/>
          🌟 Soy muy tenaz, ambicioso y no suelo parar hasta que el problema es resuelto.<br/>
          🌟 Mi veta artística me lleva a resolver los conflictos de manera creativa.<br/>
          🌟 Soy autodidacta y siempre busco optimizar los proyectos en los que estoy trabajando.
        </span>
        <span className={styles.span}>
          <b>📢Porque me tendrías que contactar? 👻<br/></b>
          🌟 Soy colaborativo con mis compañeros de equipo, siento que es la base para aprender y crecer.<br/>
          🌟 Aunque todavía no me pude desempeñar como tal, siento que tengo alma de líder.
        </span>
      </div>
      <div className={styles.secondColumn}>
        <div className={styles.list}>
          <h2>Lenguaje de programación</h2>
          <span className={styles.span}>
            🌟 Javascript<br/>
            🌟 Typescript<br/>
          </span>
        </div>
        <div className={styles.list}>
          <h2>Tecnologias</h2>
          <span className={styles.span}>
            🌟 React<br/>
            🌟 React-Native<br/>
            🌟 NodeJS<br/>
            🌟 Express<br/>
            🌟 Sequelize<br/>
          </span>
        </div>
        <div className={styles.list}>  
          <h2>Database</h2>
          <span className={styles.span}>
            🌟 MongoDB<br/>
            🌟 SQLite<br/>
            🌟 postgres<br/>
            🌟 Firebase<br/>
          </span>
        </div>
        
        {/* 
          Links para seguir la vista 
        */}
        <div className={styles.butons}>
          <Link to='web' spy={true} smooth={true} delay={80}>
            <button className={defaults.links}>Ver Primer proyecto</button>
          </Link>
          <Link to='mobile' spy={true} smooth={true} delay={80}>
            <button className={defaults.links}>Ver segundo proyecto</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
