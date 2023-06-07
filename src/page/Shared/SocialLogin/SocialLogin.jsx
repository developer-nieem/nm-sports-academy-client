import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import {  FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const {glLogin} =  useContext(AuthContext)

    const glLoginHandler =  () => {
        glLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
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