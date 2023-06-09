import useAllUser from "../../../../hooks/useAllUser";


const ManageUsers = () => {
    const [allUserDetails , refetch] =  useAllUser();
    console.log(allUserDetails);


    const handleUserRoleUpdate = (id , role) => {

        fetch(`http://localhost:3000/admin/users/${id}` , {
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({role})
        })
        .then(res => res.json())
        .then(data => {
            console.log('set user role ');
            refetch()
        })

    }
    return (
        <div>
             <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th> Email</th>
              <th> User role</th>
              
             
            </tr>
          </thead>
          <tbody>
          {allUserDetails.map((user) => (
              
                <tr key={user._id}>
                 
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  
                  <td>
                    <div className=" flex gap-2">
                        <button disabled={`${user.role === "admin" || user.role === "instructor" ? "disabled" :'' }`} onClick={() => handleUserRoleUpdate(user._id, "admin")} className="btn btn-primary btn-xs">Admin</button>

                        <button  disabled={`${user.role === "admin" || user.role === "instructor" ? "disabled" :'' }`} onClick={() => handleUserRoleUpdate(user._id, "instructor")} className="btn btn-success btn-xs">Instructor</button>
                    </div>
                    </td>
                  
                
               
                </tr>
              
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageUsers;