import * as actionTypes from './UserTypes'

const initialState = {
    user : {}
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_USER : 
        console.log(action.payload.user)
        return {
            ...state,
            user : action.payload.user
        }
        default : 
        return state
    }
}

export default UserReducer