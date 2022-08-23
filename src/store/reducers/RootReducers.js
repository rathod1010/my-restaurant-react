import { combineReducers } from "redux";
import RestaurantReducer from "./RestaurantReducer"
import ReservationReducer from "./ReservationReducer";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({
   RestaurantReducer,ReservationReducer,UserReducer
})

export default rootReducer;