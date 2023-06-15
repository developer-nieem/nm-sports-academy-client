import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProfileRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const  location = useLocation();
    if (user) {
         return <Navigate to='/' state={{from : location}} replace></Navigate>;
    }
    return children;
};

export default ProfileRoute;