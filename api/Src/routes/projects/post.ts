import express, { Request, Response, NextFunction } from 'express'
import { postProject } from './functions'

const app = express()

/*
    Creacion de ruta de posteo
*/
app.post('/', async (req: Request, res: Response, next: NextFunction) => {

    try{
        const { title, description, img, colaborations } = req.body
        const data = await postProject(title, description, img, colaborations)

        res.json(data)
    }
    catch(err: any){

        next(err)
    }
})

export default app