import * as actionTypes from './UserTypes'

export const addUser = (user) =>{
    console.log('request reached here')
    return {
        type : actionTypes.ADD_USER,
        payload : {
            user
        }
    }
}