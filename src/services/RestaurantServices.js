import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchAllRestaurants() {
    return axios.get(BASE_URL + "/restaurant/view/all");
}
export function fetchRestaurantById(restaurantId) {
    return axios.get(BASE_URL + "/restaurant/view/" + restaurantId)
}