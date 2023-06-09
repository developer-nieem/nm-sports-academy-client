import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useUsers from "../hooks/useUsers";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingPage from "../../public/loading.json";

const InstructorRoute = ({children}) => {
    const {user , loading} =  useContext(AuthContext);
    const [userDetails ] = useUsers();
    const location = useLocation();

    if (loading ) {
            return  <div className="text-center py-36">
            <Lottie animationData={loadingPage} loop={true} />
          </div>
    }

    if (user && userDetails?.instructor) {
        return children;
    }

    return  <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;