
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import loadingPage from "../../public/loading.json";
import { useContext } from 'react';
import useUsers from '../hooks/useUsers';
const UsersRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [userDetails ,, isLoading] = useUsers();
  const  location = useLocation();

 
  if (loading || isLoading) {
   return  <div className="text-center py-36">
     <Lottie animationData={loadingPage} loop={true} />
   </div>
  }

  console.log(userDetails?.student);
  if (user  && userDetails?.student) {
    return children;
  }
  
  return <Navigate to='/' state={{from : location}} replace></Navigate>;
};

export default UsersRoute;