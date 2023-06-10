import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import {  FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {glLogin} =  useContext(AuthContext)
    const navigate =  useNavigate()
    const glLoginHandler =  () => {
        glLogin()
        .then(result => {
            const user = result.user;
            // console.log(user);


            const usersInfo = { name: user.displayName, email: user.email, image:user.photoURL };
            console.log(usersInfo);
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(usersInfo),
            })
              .then((res) => res.json())
              .then(data => {
                  if (data.insertedId) {               
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Create successful",
                        showConfirmButton: false,
                        timer: 1500,
                      })
              }
          })

          navigate('/');
        })
        .catch((error) => {
            console.log(error.message);
          });
    }
   
    return (
        <div>
            <button onClick={glLoginHandler} className="btn btn-outline">
 <FaGoogle></FaGoogle>
  Login with Google
</button>
        </div>
    );
};

export default SocialLogin;