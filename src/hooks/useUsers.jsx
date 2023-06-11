import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {

    const {user, loading } =  useContext(AuthContext)

    // const token = localStorage.getItem('access-tk')

    const {refetch ,   data : userDetails = [], isLoading} = useQuery({
        queryKey : ['admin', user?.email],
        enabled: !!user?.email && !loading ,
        queryFn : async () => {
            const res = await fetch(`https://assignment12-server-developer-nieem.vercel.app/users/admin/${user?.email}`)
            return res.json()
        }
    })


    return [userDetails , refetch , isLoading ]
};

export default useUsers;