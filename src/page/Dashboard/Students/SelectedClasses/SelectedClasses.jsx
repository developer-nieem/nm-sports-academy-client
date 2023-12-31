// import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SelectedClasses = () => {
  // const [selectedClasses, setSelectedClasses] = useState([]);
    const [selectedClasses ,refetch] =  useSelectedClasses();

  // useEffect(() => {
  //   fetch("https://assignment12-server-developer-nieem.vercel.app/selected-classes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSelectedClasses(data);
  //     });
  // }, []);

  const totalPrice = selectedClasses.reduce((sum, item) => sum + item.price, 0);

  const deletedClasses = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment12-server-developer-nieem.vercel.app/selected-classes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Selected Classes - Elevate Your Game with Expert Coaching and Training</title>
      </Helmet>
      <div className="flex justify-between my-5">
        <div>
          <h2 className="text-2xl font-medium">
            Selected Items : {selectedClasses.length}
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Total Price : ${totalPrice}</h2>
        </div>
        <div>
          <Link to='/dashboard/payment' className="btn btn-primary btn-sm">Pay</Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>instructor</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item?.instructor}</td>
                <td>{item?.available_seats}</td>
                <td>${item?.price}</td>
                <th>
                  <button
                    onClick={() => deletedClasses(item?._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
