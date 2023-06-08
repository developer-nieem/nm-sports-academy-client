import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  useLocation, useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import axios from "axios";
import Swal from "sweetalert2";

const ClassesPageItem = ({item}) => {
    const { name, image, instructor, available_seats, price, students } =
    item;

    const {user} = useContext(AuthContext);
    const navigate =  useNavigate();
    const location = useLocation();
    const[userDetails] = useUsers()
  
        
    const isAdmin = userDetails?.admin
    const isInstructor =userDetails?.instructor

   
    const selectedCoursesHandler =  (item) => {
        const selectedClass=  {selectedItemId : item._id , name, image, instructor, available_seats, price, students , email: user?.email}
        console.log(selectedClass);
        if(user){
          fetch('http://localhost:3000/selected-classes', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(selectedClass)
          })
          .then(res => res.json())
          .then(data => {
            
            if(data.insertedId){
               
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Course Selected your Cart!  Please see the dashboard.',
                    showConfirmButton: false,
                    timer: 3000
                  })
            }
        })

        }else{

            Swal.fire({
                title: 'You need to login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              })

        }
      
    }
    return (
        <div>
        <div className={`card   shadow-xl ${available_seats <= 0 && 'bg-red-600'}`}>
          <figure>
            <img
            className="h-[350px]"
              src={image}
              alt="classes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              
            </h2>
            <p className="font-bold">Instructor Name: {instructor}</p>
            <div className="card-actions  mt-5">
              <div className="badge badge-outline">Seats: {available_seats}</div>
              <div className="badge badge-outline">students: {students}</div>
              <div className="badge badge-outline">price: ${price}</div>
            </div>
            <button onClick={() => selectedCoursesHandler(item)}  disabled={available_seats <= 0 || isAdmin || isInstructor} className="btn btn-secondary my-5">Select Courses</button>
          </div>
        </div>
      </div>
    );
};

export default ClassesPageItem;