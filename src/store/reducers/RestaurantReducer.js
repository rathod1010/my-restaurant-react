import { RESTAURANT_FETCH_ALL , RESTAURANT_FETCHBYID} from "../actions/ActionConstants";

const initialState = {
    restaurants: [],
    restaurant : null
   
}

export default function RestaurantReducer(state = initialState, action) {

    if (action.type === RESTAURANT_FETCH_ALL) {
        
        return ({
            ...state,
            restaurants: action.payload
        })
    }

    else if(action.type === RESTAURANT_FETCHBYID ) {
        return({
            ...state,
            restaurant : action.payload
        })
    }

    else
    {
        return state ;
    }

}