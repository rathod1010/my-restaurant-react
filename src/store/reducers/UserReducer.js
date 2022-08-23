import { LOGIN_SUCCESS } from "../actions/ActionConstants";
import { SIGNUP_SUCCESS } from "../actions/ActionConstants";
const initialState = {
    loggedInUser : null,
    SignupInUser:null
 
}

export default function UserReducer(state = initialState, action) {

    if (action.type === LOGIN_SUCCESS) {
        console.log(action.payload);
        return ({
            ...state,
            loggedInUser: action.payload,
           
        })
    }
    
    if (action.type === SIGNUP_SUCCESS) {
        console.log(action.payload);
        return ({
            ...state,
            SignupInUser: action.payload
        })
    }

    else {
        return state;
    }
}


