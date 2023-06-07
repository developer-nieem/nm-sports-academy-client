import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ClassesPageItem = ({item}) => {
    const { name, image, instructor, available_seats, price, students } =
    item;

    const {user} = useContext(AuthContext);
    const navigate =  useNavigate();
   
    const [disabled , setDisabled] = useState(true)
        
    const isAdmin = false
    const isInstructor = false

   
    const selectedCoursesHandler =  () => {
        if(!user){
           navigate('/login')
        }
      
    }
    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
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
            <button onClick={selectedCoursesHandler}  disabled={available_seats <= 0 || isAdmin || isInstructor} className="btn btn-secondary my-5">Select Courses</button>
          </div>
        </div>
      </div>
    );
};

export default ClassesPageItem;