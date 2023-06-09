import useAddedClasses from "../../../../hooks/useAddedClasses";

const MyClasses = () => {

    const [addedClasses] = useAddedClasses();
    console.log(addedClasses);

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
              <th>Students</th>
              <th>Status</th>
              <th>Feedback </th>
              <th>Update </th>
            </tr>
          </thead>
          <tbody>
          {addedClasses.map((item) => (
              
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
                  <td>{item.students}</td>
                  <td >
                    <button className="btn btn-success btn-xs">
                    {item.status}
                    </button>
                    
                    </td>
                  <td>{item?.feedBack}</td>
                  <td>
                  <button
                   
                    className="btn btn-error btn-xs"
                  >
                    Update
                  </button>
                  </td>
                </tr>
              
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyClasses;