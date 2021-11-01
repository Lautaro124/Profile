import express, { Application ,Request, Response, NextFunction } from 'express'
import { deleteProject } from './functions'

const app: Application = express()

/*
    Ruta para eliminar un proyecto
*/
app.delete('/', async (req: Request, res: Response, next: NextFunction) => {

    try{

        const { _id } = req.body
        const data = await  deleteProject(_id)

        res.send(data)
    }
    catch(err: any){
        
        next(err)
    }
})

export default app