import React , {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllRestaurants} from "../store/actions/RestaurantActions";
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


function FetchAllRestaurants() {

const restaurants = useSelector(state=> state.RestaurantReducer.restaurants)
const dispatch = useDispatch();

const myFunction = () => {
    dispatch(getAllRestaurants())
};

useEffect(() => {
    myFunction();
});

let ImgArry = [img1, img2, img3, img4,img5,img6,img7,img8,img9,img10,img11,img12]
    
    return (

        <div>
            <h2 style={{ fontWeight: "bold", color: "darkslateblue" }} className="heder_style border-bottom py-3">My Restaurant App</h2>
            <div className='col-12 pt-4'>
                <div className="row">
                    {restaurants.map((p, index) => <div key={index} className=" col-3  link_css pt-4">
                        <Link to={`/restaurant/view/${p.restaurantId}`}>
                            <div className="card" style={{ width: "100%", height: "auto" }}>
                                <img className="card-img-top" src={ImgArry[index]} alt="motor" height={181} />
                                <div className="card-body">
                                    <p className="card-text m-0 pt-1" style={{color:"black",fontFamily:"serif", fontWeight:"inherit", fontSize: "33px" }}>  {p.restaurantName}</p>

                                    <h4 className="card-title m-0 pt-1" style={{color:"green", fontSize: "15px" }}>{p.offer}% offer</h4>
                                    <p className="card-text m-0 pt-1" style={{ fontSize: "13px", color: "#999" }}> Type : {p.restaurantType}</p>


                                </div>
                            </div>
                        </Link>
                    </div>
                    )}
                </div>
            </div>

        </div>

    );
}

export default FetchAllRestaurants;
