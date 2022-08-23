import { BOOK_TABLE,MY_BOOKINGS } from "./ActionConstants";
import { bookTable,allBookings } from "../../services/ReservationServices";

export function reserveTable(payload)
{
    return (dispatch) => {
        return bookTable(payload).then(
            resp => {

                dispatch(
                    reserveTableSuccess(resp.data)
                    

                )
            }
        )
    }
}

export function reserveTableSuccess(data) {
    return (

        {
            type: BOOK_TABLE,
            payload: data
        }
    )

}


export function viewAllBookings(userId)
{
    return (dispatch) => {
        return allBookings(userId).then(
            resp => {

                dispatch(
                    viewAllBookingsSuccess(resp.data)

                )
            }
        )
    }
}

export function viewAllBookingsSuccess(data) {
    return (

        {
            type: MY_BOOKINGS,
            payload: data
        }
    )

}