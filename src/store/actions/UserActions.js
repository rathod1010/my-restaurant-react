import { userLogin,userSignUp } from '../../services/UserServices';
import { LOGIN_SUCCESS } from './ActionConstants';
import { SIGNUP_SUCCESS } from './ActionConstants';

export function doUserLogin(payload) {
    return (dispatch) => {
        return userLogin(payload).then(
            resp => {
                // console.log(resp);
                // localStorage.setItem("myUser", JSON.stringify(resp.data));
                // dispatch(doLoginSuccess(resp.data));
                // window.location.href = "/"

                if(resp.data.token)
                {
                    localStorage.setItem("myUser", JSON.stringify(resp.data));
                    dispatch(doLoginSuccess(resp.data));
                    window.location.href = "/"

                }

                return resp.data;

              
            }
        )
            .catch(error => {
                alert("Invalid Username or Password");
            })
    }
}
export function doUserSignup(payload) {
    return (dispatch) => {
        return userSignUp(payload).then(
            resp => {
               
                //  localStorage.setItem("myUser", JSON.stringify(resp.data));
                dispatch(doLoginSuccess(resp.data));
                 window.location.href = "/user/login"
            }
        )
            .catch(error => {
                alert(error.response.data)
            })
    }
}



export function doLoginSuccess(data) {

    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function doSignUpSuccess(data) {

    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}