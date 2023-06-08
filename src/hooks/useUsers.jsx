import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUsers = () => {

    const {user} =  useContext(AuthContext)

    const [userDetails , setUserDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/users/admin/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUserDetails(data)
        })
    }, [])

    console.log(userDetails);
    return [userDetails]
};

export default useUsers;