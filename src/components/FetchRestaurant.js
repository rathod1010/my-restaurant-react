import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react';
import { getRestaurantById } from "../store/actions/RestaurantActions";
import { reserveTable } from "../store/actions/ReservationActions";
import { NumberValidator } from "../lib/validation";
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
import { useParams } from 'react-router-dom'


function FetchRestaurant() 
{


    const [guest, setGuest] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [formErrors, setFormErrors] = useState({});
    const restaurant = useSelector(state => state.RestaurantReducer.restaurant);

    const current = new Date();
    const newDate = new Date(date);
   
    const dispatch = useDispatch();

    const { id } = useParams();
    const myUser = localStorage.getItem("myUser");

    const myFunction = () => {
        dispatch(getRestaurantById(id))
    };
    useEffect(() => {
        myFunction();
    });

    const handleSubmit = () => {
        let errors = {};
        if (!guest) {

            errors['guestError'] = "Please select No of Guests"

        }

        if (date) {
            if(newDate.getTime()<current.getTime()){
            errors['dateError'] = "select valid date";
            }
        }
        if (!time) {
            errors['timeError'] = "Time is Required"
        }
        if (!date) {
            errors['date2Error'] = "Date is Required"
        }
       
        
        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        if (JSON.parse(myUser).userId) {
            let payload =
            {
                userId: JSON.parse(myUser).userId,
                restaurantId : restaurant.restaurantId,
                noOfGuests:guest,
                date:date,
                time:time,
            }
            console.log("payload", payload)
            dispatch(reserveTable(payload));
            setTimeout(() => {
                window.location.href ="/success"
              },1000)
            // window.location.href="/"
          
        }
         else {
            window.location.href = "/user/login"
        }
      }
    }
    let ImgArry = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    return (
        <div>
            {
                restaurant !== null &&
                <div className="row pt-4">
                    <div className="col" >
                        <img src={ImgArry[id - 1]} alt="not found" style={{marginLeft:"10px", width: "90%", height: "416px", objectFit: "fill" }} />
                        <p style={{ fontFamily: "sans-serif", color: "darkred", fontWeight: "bold", fontSize: "35px", marginLeft:"40px" }}>  {restaurant.restaurantName} Restaurant</p>
                        <p style={{ fontWeight: "bold", color: "green",marginLeft:"200px" ,fontSize: "20px"}}>  {restaurant.offer}%offer</p>
                    </div>
                    {/* <div className="col">


                        <p style={{ fontFamily: "monospace", color: "blueviolet", fontWeight: "bold", fontSize: "40px" }}>  {restaurant.restaurantName} Restaurant</p>
                        <p style={{ fontWeight: "bold", color: "green" }}>  {restaurant.offer}%offer</p> */}
                        {/* <p style={{ fontWeight: "bold" }}> {restaurant.restaurantType}</p> */}


                        {/* <div className="d-flex">
                            <div className="form-group">
                                <label style={{ fontWeight: "bold" }}>
                                    quantity</label>
                                <input type="text" name="quantity" className="form-control" value={qty} onChange={e => setQty(e.target.value)} style={{ width: "100px" }} onKeyPress={NumberValidator} />
                            </div>
                            <button type="button"
                                class="btn btn-success" onClick={handleSubmit} disabled={qty?.length > 0 && qty !== "0" ? false : true}>
                                <span class="glyphicon 
                    glyphicon-shopping-cart" >
                                </span>
                                <b style={{ color: "ButtonFace" }} > Add to Cart </b>
                            </button>
                        </div> */}
                        <div class="card text-white bg-dark mb-3" style={{height:"500px",width:"550px",objectFit: "contain",marginRight:"100px"}} >
                            <div class="card-header" style={{fontSize:"26px",color:"whitesmoke",fontWeight:"bold",textAlign:"center"}}>Book Your Slot</div>
                            <div class="card-body">
                                {/* <h5 class="card-title"></h5> */}
                                {/* <div className="form-group">
                                <label style={{ fontWeight: "bold"}}>
                                    Select Table no </label>
                                    <input type="text" name="table" className="form-control" value={table} onChange={e => setTable(e.target.value)} style={{ width: "150px",marginLeft:"180px" }} />
                                    </div> */}

                                    <div className="form-group">
                                <label style={{ fontWeight: "bold",marginLeft:"210px"}}>
                                    No of Guests </label>
                                    <input type="text" name="table" className="form-control" value={guest} onChange={e => setGuest(e.target.value)} onKeyPress={NumberValidator} style={{ width: "150px",marginLeft:"180px" }}/>
                                    {
                                  formErrors.guestError &&

                                  <div style={{ color: 'red',textAlign:"center" }}>{formErrors.guestError}</div>
                            }

                                    </div>

                                    <div className="form-group">
                                <label style={{ fontWeight: "bold",marginLeft:"210px"}}>
                                    Select Date </label>
                                    <input type="date" name="table" className="form-control" value={date} onChange={e => setDate(e.target.value)} style={{ width: "150px",marginLeft:"180px" }} />
                                    {
                                  formErrors.date2Error &&

                                  <div style={{ color: 'red' ,textAlign:"center"}}>{formErrors.date2Error}</div>
                            }
                                    {
                                  formErrors.dateError &&

                                  <div style={{ color: 'red',textAlign:"center" }}>{formErrors.dateError}</div>
                            }

                                    </div>

                                    <div className="form-group">
                                <label style={{ fontWeight: "bold",marginLeft:"210px"}}>
                                    Select Time </label>
                                    <input type="time" name="table" className="form-control" value={time} onChange={e => setTime(e.target.value)} style={{ width: "150px",marginLeft:"180px" }} />
                                    {
                                  formErrors.timeError &&

                                  <div style={{ color: 'red',textAlign:"center" }}>{formErrors.timeError}</div>
                            }
                                    </div>

                                    <button type="button"
                                class="btn btn-success" onClick={handleSubmit} style={{width:"100px",marginLeft:"200px"}}>
                        
                                <b style={{ color: "whitesmoke" ,width:"100px",fontFamily:"revert",fontWeight:"bold",fontSize:"18px"}} > Book </b>
                            </button>
                                <p class="card-text"></p>
                            </div>
                        </div>
                       

                    </div>

                // </div>
            }

        </div>
    )
}

export default FetchRestaurant;
