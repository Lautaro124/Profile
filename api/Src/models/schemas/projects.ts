import { Schema } from 'mongoose'

/*
    Crear la base del schema
*/
interface Project {
    title: string;
    description: string;
    img: string;
    colaborations: string;
}

/*
    Creacion del schema usando al base anterior
*/
const schema = new Schema<Project>({

    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    colaborations: { type: String, required: true},
})

export default schema