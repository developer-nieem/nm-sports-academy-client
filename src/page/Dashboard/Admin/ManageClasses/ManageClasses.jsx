import { useEffect, useState } from "react";
import useAddedClasses from "../../../../hooks/useAddedClasses";
import useManageClasses from "../../../../hooks/useManageClasses";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ManageClasses = () => {
   
    const [manageClasses , refetch] =  useManageClasses()


    const handleStatusUpdate = (id, status) => {
        
        fetch(`https://assignment12-server-developer-nieem.vercel.app/classes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
          })
      };


    return (
        <div>
          <Helmet>
        <title>
          Manage classes - Elevate Your Game with Expert Coaching and Training
        </title>
      </Helmet>
              <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor name</th>
              <th> Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action Status</th>
              <th>Feedback </th>
             
            </tr>
          </thead>
          <tbody>
          {manageClasses.map((item) => (
              
                <tr key={item._id}>
                  <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                    
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.instructor}</td>
                  <td >{item?.email}</td>
                  <td>{item?.available_seats}</td>
                  <td>${item.price}</td>
                  <td><button className="btn btn-outline btn-xs">{item.status}</button></td>
                  <td>
                    <div className=" flex gap-2">
                        <button disabled={`${item.status === "denied" ? "disabled" :'' }`} onClick={() => handleStatusUpdate(item._id, "approved")} className="btn btn-primary btn-xs">Approved</button>
                        <button  disabled={`${item.status === "approved" ? "disabled" :'' }`} onClick={() => handleStatusUpdate(item._id, "denied")} className="btn btn-error btn-xs">Denied</button>
                    </div>
                    </td>
                  
                
                  <td>
                  <Link
                  
                    to={`/dashboard/feedback/${item._id}`}
                    className="btn btn-neutral btn-xs"
                  >
                    Feedback
                  </Link>
                  </td>
                </tr>
              
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageClasses;