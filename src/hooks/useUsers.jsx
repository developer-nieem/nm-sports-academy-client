import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {

    const {user} =  useContext(AuthContext)

    // const [userDetails , setUserDetails] = useState(null);

    const {refetch ,  data : userDetails = []} = useQuery({
        queryKey : ['admin', user?.email],
        queryFn : async () => {
            const res = await fetch(`http://localhost:3000/users/admin/${user?.email}`)
            return res.json()
        }
    })



    console.log(userDetails);
    return [userDetails , refetch ]
};

export default useUsers;