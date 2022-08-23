import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../images/logoo.jpg"

function NavBar() {
    const myUser = localStorage.getItem("myUser");
    const userId = JSON.parse(myUser).userId
    const name = JSON.parse(myUser).name
    const handlelogout = () => {
        localStorage.setItem("myUser",JSON.stringify({}));
        alert("Logout Successful");
        window.location.href="/"
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <Link className="navbar-brand" to="/"><img src={img1} alt="" style={{ width: "35px", height: "40px" }}></img></Link>
            {/* <h3>welcome</h3> */}
            <ul className="nav navbar-nav ml-auto">
                <li class="nav-item pr-3">
                    <Link className="nav-link" to="/" style={{fontWeight:"bold"}}>Home</Link>
                </li>
               
               
                <li class="nav-item pr-3">
                    
                    
                    <Link className="nav-link" to={`/bookings/${userId}`}  style={{fontWeight:"bold"}}>MyBookings</Link>
                     
                   
                </li>
                {userId ? <li class="nav-item pr-3">
                    <Link className="nav-link" to="#"  style={{fontWeight:"bold"}}>
                        {name}
                    </Link>
                </li> :
                    <li class="nav-item pr-3">
                        <Link className="nav-link" to="/user/login"  style={{fontWeight:"bold"}}>SignIn</Link>
                    </li>}
                {userId ? <li class="nav-item pr-3" onClick={handlelogout}>
                    <Link className="nav-link" to="#"  style={{fontWeight:"bold"}}>
                        {
                            "logOut"
                        }
                    </Link>
                </li> :
                    ""}
                
            </ul>
        </nav>
    )
}

export default NavBar;