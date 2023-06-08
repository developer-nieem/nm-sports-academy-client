import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useSelectedClasses = () => {
    const {user , loading} = useContext(AuthContext)
    const {refetch , data : selectedClasses = []} = useQuery({
        queryKey: ['selected-classes', user?.email],
        enabled: !!user?.email && !loading,
        queryFn : async () => {
            const res = await fetch(`http://localhost:3000/selected-classes/${user?.email}`)
            return res.json()
        }
    })

    console.log(selectedClasses);
    return [selectedClasses, refetch]
};

export default useSelectedClasses;