import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const EnrolledClasses = () => {
    const {user , loading} = useContext(AuthContext)
    const {refetch , data : enrolledClasses = []} = useQuery({
        queryKey: ['enrolled-classes', user?.email],
        enabled: !!user?.email && !loading,
        queryFn : async () => {
            const res = await fetch(`http://localhost:3000/enrolled-classes/${user?.email}`)
            return res.json()
        }
    })

    console.log(enrolledClasses);


    return (
        <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {enrolledClasses.map((enrolledClass) => (
              enrolledClass.Items.map((item) => (
                <tr key={item._id}>
                  <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                    
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                  <button
                   
                    className="btn btn-error btn-xs"
                  >
                    Enrolled
                  </button>
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default EnrolledClasses;