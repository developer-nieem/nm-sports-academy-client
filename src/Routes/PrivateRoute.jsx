import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import loadingPage from "../../public/loading.json";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
  const  location = useLocation();
  if (loading) {
   return  <div className="text-center py-36">
     <Lottie animationData={loadingPage} loop={true} />
   </div>
  }

  if (user) {
    return children;
  }
  
  return <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;