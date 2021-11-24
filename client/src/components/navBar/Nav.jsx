import React, { useState } from 'react'
import style from '../../styles/nav.module.css'
import { Link } from 'react-scroll'

export default function Nav() {

  var [inicio, setInicio] = useState(false)
  var [about, setAbout] = useState(false)
  var [project, setProject] = useState(false)
  var [contact, setContact] = useState(false)

  const handlerChange =  (e) => {
    switch (e){
      case 'landing-page':
        setInicio(!inicio)
        break;
      
      case 'about':
        setAbout(about)
        break;

      case 'web':
        setProject(!project)
        break;
      
      case 'contact':
        setContact(!contact)
        break;

      default: inicio = true
    }
  }
  return (
    <div className={style.content}>
      <Link className={inicio === false? style.link: style.activeLink} onSetActive={e => handlerChange(e)} to='landing-page' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Inicio
        </h4>
      </Link>
      <Link className={about === false? style.link: style.activeLink} onSetActive={e => handlerChange(e)} to='about' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          About
        </h4>
      </Link>
      <Link className={project === false? style.link: style.activeLink} onSetActive={e => handlerChange(e)} to='web' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Projects
        </h4>
      </Link>
      <Link className={contact === false? style.link: style.activeLink} onSetActive={e => handlerChange(e)} to='contact' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Contact me
        </h4>
      </Link>
    </div>
  )
}
