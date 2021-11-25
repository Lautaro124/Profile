import React, { useState } from 'react'
import style from '../../styles/nav.module.css'
import { Link } from 'react-scroll'

export default function Nav() {

  const initialValue = {
    inicio: false,
    about: false,
    project: false,
    contact: false,
  }
  const [value, setValue] = useState(initialValue)

  const handlerChange =  (e) => {
    switch (e){
      case 'landing-page':
        setValue({...initialValue, inicio: true})
        break;
      
      case 'about':
        setValue({...initialValue, about: true})
        break;

      case 'web':
        setValue({...initialValue, project: true})
        break;
      
      case 'contact':
        setValue({...initialValue, contact: true})
        break;

      default: return value
    }
  }
  return (
    <div className={style.content}>
      <Link className={value.inicio === false? style.link: style.activeLink} onClick={() => handlerChange('landing-page')} to='landing-page' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Inicio
        </h4>
      </Link>
      <Link className={value.about === false? style.link: style.activeLink} onClick={() => handlerChange('about')} to='about' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Acerca de mi
        </h4>
      </Link>
      <Link className={value.project === false? style.link: style.activeLink} onClick={() => handlerChange('web')} to='web' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Projects
        </h4>
      </Link>
      <Link className={value.contact === false? style.link: style.activeLink} onClick={() => handlerChange('contact')} to='contact' spy={true} smooth={true} delay={80}>
        <h4 className={style.text}>
          Contact me
        </h4>
      </Link>
    </div>
  )
}
