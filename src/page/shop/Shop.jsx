
import "./shop.css"

const Shop = () => {
    return (
        <div>
            {/* Shop banner section */}
            <div className="shop-banner flex flex-col justify-center items-center h-64">
                <h2 className="text-4xl font-semibold text-white">Shop</h2>
            </div>

            {/* Sidebar and products section */}
            
            <div className="row mx-2">
                {/* Sidebar part */}
                <div className="md:col-3">
                    categoric

                </div>

                {/* Products part */}
                <div className="md:col-9" >
                products
                </div>
            </div>

        </div>
    );
};

export default Shop;