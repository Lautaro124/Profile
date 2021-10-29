import { ProjectModel } from '../../models'

/*
    Función para optener todos los proyectos
*/
const getProjects = async () => {

    try{

        let project = await ProjectModel.find()
    
        return project
    }
    catch(err: any){

        throw Error(err)
    }
}

/*
    Función para crear un proyecto
*/
const postProject = async (title: string, description: string, img: string, colaborations: string) => {

    try{
        await ProjectModel.create({title, description, img, colaborations})

        return { title, description, img, colaborations }
    }
    catch(err: any){

        throw Error(err)
    }
}

/*
    Función para borrar muchos proyectos
*/
const deleteProjects = async (title: string) => {

    try{

        await ProjectModel.deleteMany({title: title})

        return 'Deleted'
    }
    catch (err:any) {

        throw Error(err)
    }
}

const putProject = async (id: string,title: string, description: string, img: string, colaborations: string) => {

    try{

        let project = await ProjectModel.findByIdAndUpdate(id, {title, description, img, colaborations})

        return project
    }
    catch(err: any){

        throw Error(err)
    }
}

module.exports= {
    getProjects,
    postProject,
    deleteProjects,
    putProject
}