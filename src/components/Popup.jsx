import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {

    const hasVisitedBefore = sessionStorage.getItem('visitedBefore')

    if (!hasVisitedBefore) {
       setTimeout(()=>{
        setShowPopup(true);
        sessionStorage.setItem('visitedBefore', 'true')
       },3000)
    }
  }, [])


  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div>
      {showPopup && (
        <div className="z-50 fixed top-[10%] left-[5%] sm:left-[40%] bg-slate-950 p-10 rounded-lg text-white shadow-2xl shadow-black ">
          <h1 className="text-xl mb-3">Admin and Instructor Demo Access</h1>
          <p>
            <strong> ### Demo Admin access :</strong> <br />
            Email: admin@gmail.com
            <br />
            Password: Asdfghjkl!
            <br />
            <br />
            <strong>### Demo Instructor access :</strong> <br />
            Email: Instructor@gmail.com
            <br />
            Password: Asdfghjkl!
            <br />
          </p>
          <p className="my-3">More <Link to="https://github.com/developer-nieem/nm-sports-academy-client" className="text-blue-700 underline" target="_blank"> Documentation </Link> </p>
          <div className="text-right mt-10 -mb-9 -mr-9">
            <button className="btn btn-light" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
