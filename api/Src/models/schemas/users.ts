import { Schema } from 'mongoose'

/* 
    Creación de base del schema
*/
interface User {

    userName: string;
    firstName: string;
    lastName: string;
    age: number;
    recluter: boolean;
    mail: string;
    feedback: string;
    password: string;
}

/*
    Creación del schema
*/
const schema = new Schema<User>({

    userName: { type: String, required: true,validate: {

        validator: (value: string) => {
            const re = /^[^{}<>#$%&~^`/*+¿?¡!@]*$/g;

            if (!re.test(value)) {
                return false
            }
            return true
        }
    } },
    firstName: { type: String, required: true ,validate: {

        validator: (value: string) => {
            const re = /[^A-Za-z]/g

            if(!re.test(value)) {
                return false
            }
            return true
        }
    } },
    lastName: { type: String, required: true, validate: {

        validator: (value: string) => {
            const re = /[^A-Za-z]/g

            if(!re.test(value)) {
                return false
            }
            return true
        }
    } },
    age: { type: Number, required: true },
    recluter: { type: Boolean, required: true },
    mail: { type: String, required: true, validate: {

        validator: function (value: any) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    } },
    feedback: { type: String, required: false },
    password: { type: String, required:true }
})

export default schema