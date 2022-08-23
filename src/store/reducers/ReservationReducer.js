import { BOOK_TABLE,MY_BOOKINGS } from "../actions/ActionConstants";

const initialState = {
    reservation: null,
    bookings:[]

}

export default function ReservationReducer(state = initialState, action) {

    if (action.type === BOOK_TABLE) {
        return (
            {
                ...state,
                reservation: action.payload
            }
        )
    }

    if (action.type === MY_BOOKINGS) {
        return (
            {
                ...state,
                bookings: action.payload
            }
        )
    }



    else {
        return state;
    }
}