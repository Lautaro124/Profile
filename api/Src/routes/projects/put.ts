import express, { Application, Request, Response, NextFunction } from 'express'
import { putProject } from './functions'

const app: Application = express()

/* 
    Ruta para cambiar un proyecto
*/

app.put('/', async (req: Request, res: Response, next: NextFunction) => {

    try{

        const { _id, title, description, img, colaborations } = req.body
        const data = await putProject(_id, title, description, img, colaborations)

        res.json(data)
    }
    catch(err: any){
    
        next(err)
    }
})

export default app