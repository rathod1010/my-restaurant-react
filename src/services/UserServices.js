import { BASE_URL1,BASE_URL3} from "../store/actions/ActionConstants"
import axios from "axios";

export function userLogin(payload)
{
    return axios.post(BASE_URL3+"/generate", payload)
}

export function userSignUp(payload)
{
    return axios.post(BASE_URL1+"/user/register", payload)
}