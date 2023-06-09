import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAllUser = () => {
   
    // const {user} =  useContext(AuthContext)

    // const [userDetails , setUserDetails] = useState(null);

    const {refetch , data : allUserDetails = []} = useQuery({
       queryKey : ['users'], 
        queryFn : async () => {
            const res = await fetch(`http://localhost:3000/users`)
            return res.json()
        }
    })



    console.log(allUserDetails);
    return [allUserDetails , refetch]
};

export default useAllUser;