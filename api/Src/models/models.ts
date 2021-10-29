import { model } from 'mongoose'
import user from './schemas/users'
import project from './schemas/projects'

/*
    Uso de modelos en mongoDB
*/
export const ProjectModel = model('project', project)
export const UserModel = model('user', user)