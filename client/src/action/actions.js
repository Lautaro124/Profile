import { GET_PROJECTS } from './constrain'
import { get_projects } from '../routes'
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