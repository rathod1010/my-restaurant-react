import axios from 'axios';
import authHeader from './AuthService';

import { BASE_URL2 } from '../store/actions/ActionConstants';

export function bookTable(payload)
{
    return axios.post(BASE_URL2+"/reservation/book/table",payload, { headers: authHeader() })
}

export function allBookings(userId)
{
    return axios.get(BASE_URL2+"/reservation/view/all/"+userId,{ headers: authHeader() })
}