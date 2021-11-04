import { GET_PROJECTS, POST_PROJECTS, PUT_PROJECTS, DELETE_PROJECTS } from './constrain'
import { get_projects, post_projects, delete_projects, put_projects } from '../routes'
import axios from 'axios'

/*
    Funcion para obtener todos los proyectos
*/
export function getProjects () {
    return async function(dispatch) {

        try{
            const projects = await axios.get(get_projects)
    
            return dispatch ({
                type: GET_PROJECTS,
                payload: projects.data
            })
        }
        catch(err){
            alert(err)
        }
    }
}

/*
    Funcion para crear un nuevo proyecto 
*/
export function postProject ({title, description, img, colaborations}) {
    return async function (dispatch) {

        try{
            const project = await axios.post(post_projects, {title, description, img, colaborations})

            return dispatch({
                type: POST_PROJECTS,
                payload: project.data
            })
        }
        catch (err) {
            alert(err)
        }
    }
}