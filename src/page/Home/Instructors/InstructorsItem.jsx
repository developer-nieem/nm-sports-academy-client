import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaComment, FaEnvelope } from "react-icons/fa";
const InstructorsItem = ({ instructorItem }) => {
  const { image, name, email } = instructorItem;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="flex gap-3">
          <div>
            <img
              className="h-20 w-20 rounded-full border-2 shadow-md border-white"
              src={`${
                image
                  ? image
                  : "https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png"
              }`}
              alt="name"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">{name}</h2>
            
            {/* Rating for instructor */}
            <Rating style={{ maxWidth: 100 }} value={Math.random()* 5} readOnly />
          </div>
        </div>

        <div className="card-body">
          <div className="sm:flex">
            <p className="flex items-center gap-1 text-md"> <FaComment></FaComment> {Math.floor(Math.random()*10)} Comments</p>

            <p className="flex items-center gap-1 text-md"> <FaEnvelope></FaEnvelope> {email}</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default InstructorsItem;
