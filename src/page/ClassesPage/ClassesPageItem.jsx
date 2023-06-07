
const ClassesPageItem = ({item}) => {
    const { name, image, instructor, available_seats, price, students } =
    item;
    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
            className="h-[350px]"
              src={image}
              alt="classes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              
            </h2>
            <p className="font-bold">Instructor Name: {instructor}</p>
            <div className="card-actions  mt-5">
              <div className="badge badge-outline">Seats: {available_seats}</div>
              <div className="badge badge-outline">students: {students}</div>
              <div className="badge badge-outline">price: ${price}</div>
            </div>
            <button className="btn btn-secondary my-5">Select Courses</button>
          </div>
        </div>
      </div>
    );
};

export default ClassesPageItem;