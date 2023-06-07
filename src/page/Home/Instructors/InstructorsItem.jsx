const InstructorsItem = ({ instructorItem }) => {
  const { image, instructor, email } = instructorItem;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px]"
            src={image}
            alt="name"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor}</h2>
          <p>{email}</p>
          
        </div>
      </div>
    </div>
  );
};

export default InstructorsItem;
