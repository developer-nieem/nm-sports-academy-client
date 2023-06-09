import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAddedClasses = () => {
    const {user , loading} = useContext(AuthContext)
    const {refetch , data : addedClasses = []} = useQuery({
        queryKey: ['instructor-classes', user?.email],
        enabled: !!user?.email && !loading,
        queryFn : async () => {
            const res = await fetch(`http://localhost:3000/instructor-classes/${user?.email}`)
            return res.json()
        }
    })

    return [addedClasses, refetch]
};

export default useAddedClasses;