 import React, { useEffect } from "react";


function SuccessDrawer() {
    useEffect(() => {
        const myUser = localStorage.getItem("myUser");
        setTimeout(() => {
            window.location.href = `/bookings/${JSON.parse(myUser).userId}`
        }, 2000)
    }, [])
    return (
        <>
            <div className="card_content">
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>

                <h5>Slot Booked Successful!</h5>
            </div>


        </>
    );
}

export default SuccessDrawer;