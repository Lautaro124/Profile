import  express, { Application }  from 'express'
import { connect } from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import getProject from './routes/projects/get'
import postProject from './routes/projects/post'
import deleteProject from './routes/projects/delete'
import putProject from './routes/projects/put'

dotenv.config()

const conect = async (): Promise<void> => {

    /*
        Guardar la url en una varliable
    */
    const url: string | undefined = process.env.URL

    /*
        Funcion para conectarse a la base de datos
    */
    await connect(`${url}`)
}

export default function App(port: number){

    /* 
        Creacion de aplicaicon
    */
    const app: Application = express()

    /*
        Callback para conectarse a la base de datos
    */
    conect().then(() => console.log('Conected to data base')).catch((err) => console.log(err))
    /* 
        Seteo de puerto
    */
    app.set('port', port || 3001)
    
    /* 
        Midelwers
    */
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(morgan('dev'))
    app.use(cors())

    /*
        Creacion de Res Api
    */
   
    /// Rutas de proyectos
    app.use('/Project', getProject)
    app.use('/Project/Create', postProject)
    app.use('/Project/Delete', deleteProject)
    app.use('/Project/Change', putProject)

   /*
        Llamada al puerto
   */
    app.listen( app.get('port'), () => console.log('Port listenign'))
}