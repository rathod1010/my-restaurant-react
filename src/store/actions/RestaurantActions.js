import {RESTAURANT_FETCH_ALL , RESTAURANT_FETCHBYID} from './ActionConstants';
import { fetchAllRestaurants,fetchRestaurantById } from '../../services/RestaurantServices';

export function getAllRestaurants()
{
    return(dispatch) => {
        return fetchAllRestaurants().then(
            response =>
            {
                dispatch(getAllRestaurantsSuccess(response.data))
            }
        )
    }
}

export function getAllRestaurantsSuccess(data)
{
    return(
        {
            type: RESTAURANT_FETCH_ALL,
            payload: data
        }

    )
}

export function getRestaurantById(restaurantId)
{
    return(dispatch) => {
        return fetchRestaurantById(restaurantId).then(
            response =>
            {
                dispatch(getRestaurantByIdSuccess(response.data))
                console.log(response.data);
            }
        )
    }
}

export function getRestaurantByIdSuccess(data)
{
    return(
        {
            type: RESTAURANT_FETCHBYID,
            payload: data
        }

    )
}