import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const PaymentHistory = () => {
    const {user , loading} = useContext(AuthContext)

    const {refetch , data : paymentHistory = []} = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !!user?.email && !loading,
        queryFn : async () => {
            const res = await fetch(`https://assignment12-server-developer-nieem.vercel.app/payment/${user?.email}`)
            return res.json()
        }
    })

    console.log(paymentHistory);

    return (
        <div>
               <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>SL</th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((item , index) => (
              <tr key={item._id}>
                
                
                <td>{index +1}</td>
                <td>{item?.transactionId}</td>
                <td>${item?.price}</td>
                <td>{item?.paymentDate}</td>
                
                <th>
                  <button
                    
                    className="btn btn-error btn-xs"
                  >
                    Paid
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

export default PaymentHistory;