import express, { Application, Request, Response, NextFunction } from 'express'
import { getProjects } from './functions'

const app: Application = express()

/* 
    Ruta para obtener todos los proyectos
*/
app.get('/', async (req: Request, res: Response, next: NextFunction)=> {

    try{
        const data = await getProjects()
    
        res.json(data) 
    }
    catch(err: any){

        next(err)
    }
})

export default app