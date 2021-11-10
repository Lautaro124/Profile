import React from 'react'
import { Link } from 'react-scroll'
import styles from '../../styles/about.module.css'

export default function About() {
  return (
    <div className={styles.content}>
      <div className={styles.firstColumn}>
        <h2>Acerca de mi</h2>
        <span className={styles.span}>
        <b>📢 Quien soy? 👀<br/></b>
          🌟 Estoy interesado en el desarrollo Full stack.<br/>
          🌟 Soy muy tenaz, ambicioso y no suelo parar hasta que el problema es resuelto.<br/>
          🌟 Tengo una lado artístico muy bueno, que da lugar a que resuelva<br/>
          los problemas de una formas creativas, o que con pocas alternativas
          puedo generar proyectos prometedores.<br/>
          🌟 Normalmente no suelo confórmame con el 'producto final' y siempre busco maneras de optimizarlo o que quede mejor, por mas que ya este entregado.
        </span>
        <span className={styles.span}>
          <b>📢Porque me tendrías que contactar? 👻<br/></b>
          🌟 No tengo problema en parar mi proyecto para ayudar a los demás, siempre que tenga la posibilidad de hacerlo.<br/>
          🌟 Soy muy proactivo, y me gusta dividir las tareas en grupo.
        </span>
      </div>
      <div className={styles.secondColumn}>
        <h2><b>📢Lenguaje de programación:</b></h2>
        <span className={styles.span}>
          🌟 React<br/>
          🌟 React-Native<br/>
          🌟 Javascript<br/><br/>
          🌟 NodeJS<br/>
          🌟 Express<br/>
          🌟 Sequelize<br/>
        </span>
        <div>
          <Link to='web' spy={true} smooth={true} delay={80}>
            <button>Ver Primer proyecto</button>
          </Link>
          <Link to='mobile' spy={true} smooth={true} delay={80}>
            <button>Ver segundo proyecto</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
