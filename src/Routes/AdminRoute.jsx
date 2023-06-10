import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useUsers from "../hooks/useUsers";

import Lottie from "lottie-react";
import loadingPage from "../../public/loading.json";
import { Navigate, useLocation } from "react-router-dom";
const AdminRoute = ({children}) => {

    const {user , loading} =  useContext(AuthContext);
    const [userDetails , isLoading ] = useUsers();
    const location = useLocation();

    if (loading &&  isLoading) {
            return  <div className="text-center py-36">
            <Lottie animationData={loadingPage} loop={true} />
          </div>
    }

    if (user && userDetails?.admin) {
        return children;
    }

    return  <Navigate to="/dashboard" state={{from: location}} replace></Navigate>
};

export default AdminRoute;