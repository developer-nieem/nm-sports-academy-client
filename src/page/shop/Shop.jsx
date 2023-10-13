import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaTimes } from "react-icons/fa";



import "./shop.css";

const Shop = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/products");
      return res.json();
    },
  });

  if (isLoading) {
    return <div>Loading............</div>;
  }
  if (isError) {
    <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div>
      {/* Shop banner section */}
      <div className="shop-banner flex flex-col justify-center items-center h-64">
        <h2 className="text-4xl font-semibold text-white">Shop</h2>
      </div>

      {/* Sidebar and products section */}

      <div className="row mx-2">
        {/* Sidebar part */}
        <div className="md:col-3">categoric</div>

        {/* Products part */}
        <div className="md:col-9">
          <div className="row py-10">
            {data.map((product) => (
              <div key={product._id} className="md:col-4 my-2">
                <div className="card  bg-base-100 shadow-xl">
                  <figure className="px-2 pt-2">
                    <img
                      src={product?.images[1]}
                      alt="Shoes"
                      className="rounded-xl h-60 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body  ">
                    <h2 className="card-title items-start">{product?.name}</h2>
                    <p className="text-slate-500 uppercase">{product?.category}</p>
                   
                    {/*Inventory part  */}
                    <p className="">{product.inventory < 1 ? <span className="font-bold flex items-center gap-1"> <FaTimes></FaTimes> Stock Out</span> : <span className="font-bold flex items-center gap-1"> <FaCheck></FaCheck>  In Stock</span> } </p>

                    {/* Price */}
                    <p className="text-sky-800 font-semibold text-lg">${product.price}</p>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-wide">View Products</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
