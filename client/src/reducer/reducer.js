import { GET_PROJECTS, POST_PROJECTS, PUT_PROJECTS, DELETE_PROJECTS} from '../action/constrain'

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
        
        case POST_PROJECTS:
            return {
                ...state,
                project: action.payload
            }
        
        case PUT_PROJECTS:
            return {
                ...state,
                project: state.project.map(e => {

                    if(e.title === action.payload.title) {
                        return action.payload
                    }
                    return e
                })
            }
        
        case DELETE_PROJECTS:
            return {
                ...state,
                project: state.project.filter(e => e._id !== action.payload._id)
            }
        
        default:
            return state
    }
}