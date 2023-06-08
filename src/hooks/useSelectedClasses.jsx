import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
    const {refetch , data : selectedClasses = []} = useQuery({
        queryFn : async () => {
            const res = await fetch("http://localhost:3000/selected-classes")
            return res.json()
        }
    })

    return [selectedClasses, refetch]
};

export default useSelectedClasses;