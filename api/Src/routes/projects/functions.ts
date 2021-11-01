import { ProjectModel } from '../../models/models'

/*
    Función para optener todos los proyectos
*/
export const getProjects = async () => {

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
export const postProject = async (title: string, description: string, img: string, colaborations: string) => {

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
export const deleteProject = async (id: string) => {

    try{

        await ProjectModel.deleteOne({_id: id})

        return 'Deleted'
    }
    catch (err: any) {

        throw Error(err)
    }
}

/*
    Funcion para poder cambiar un proyecto
*/
export const putProject = async (id: string,title: string, description: string, img: string, colaborations: string) => {

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
    deleteProject,
    putProject
}