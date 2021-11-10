import { GET_PROJECTS } from '../action/constrain'

const initialState = {
    project: []
}

export default function Reducer(state= initialState, action) {

    switch(action.type) {

        case GET_PROJECTS:
            return {
                ...state,
                project: action.payload
            }
        
        default:
            return state
    }
}