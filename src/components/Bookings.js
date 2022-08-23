import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { viewAllBookings } from "../store/actions/ReservationActions";
import { useParams } from 'react-router-dom'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"
import img12 from "../images/img12.jpg"


function Bookings()
{

    const bookings = useSelector(state => state.ReservationReducer.bookings);
    // const restaurant = useSelector(state=> state.RestaurantReducer.restaurant)

    const dispatch = useDispatch();
    const { id } = useParams();

const myFunction = () => {
    dispatch(viewAllBookings(id))
};

useEffect(() => {
    myFunction();
});

let ImgArry = [img1, img2, img3, img4,img5,img6,img7,img8,img9,img10,img11,img12]

    return(
        <div>
              <h3 style={{ fontWeight: "bold", color: "darkslateblue" }} className="heder_style border-bottom py-3">MY BOOKINGS</h3>
              <marquee scrollAmount="12"><p style={{fontFamily:"cursive",fontSize:"16px",color:"indigo",fontWeight:"bold"}}>Show your booking number and please come before 5mins of your slot time at restaurant</p></marquee>
            <center>
           {bookings.map((p, index) => <div key={index} className=" col-4 link_css pt-4">
                        {/* <Link to={`/restaurant/view/${p.restaurantId}`}> */}
                            <div className="card" style={{ width: "100%", height: "auto" }}>
                                <img className="card-img-top" src={ImgArry[p.restaurantId-1]} alt="motor" height={200} />
                                
                                <div className="card-body">
                                  
                                    <p className="card-text m-0 pt-1" style={{color:"black",fontFamily:"serif", fontWeight:"inherit", fontSize: "18px" }}> Date : {p.date}</p>

                                    <h4 className="card-title m-0 pt-1" style={{color:"green", fontSize: "15px" }}>Time : {p.time}</h4>
                                    <p className="card-text m-0 pt-1" style={{ fontSize: "16px", color: "chocolate" }}> Guests : {p.noOfGuests}</p>
                                    <p className="card-text m-0 pt-1" style={{ fontSize: "16px", color: "#999" }}> Booking No  : {p.bookingNum}</p>


                                </div>
                            </div><hr></hr>
                        {/* </Link> */}
                    </div>
                    )}
                    </center>

        </div>
    )

}

export default Bookings;