

import { useQuery } from '@tanstack/react-query';


const useManageClasses = () => {


const {refetch , data : manageClasses = []} = useQuery({

    queryFn : async () => {
        const res = await fetch(`http://localhost:3000/classes-page`)
        return res.json()
    }
})

return [manageClasses, refetch]
  
};

export default useManageClasses;