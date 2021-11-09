import { Schema } from 'mongoose'

/* 
    Creación de base del schema
*/
interface User {

    userName: string;
    mail: string;
    feedback: string;
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
    mail: { type: String, required: true, validate: {

        validator: function (value: any) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!re.test(value)) {
                return false;
            }
            return true;
        }
    } },
    feedback: { type: String, required: false }
})

export default schema