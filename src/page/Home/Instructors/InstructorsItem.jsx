const InstructorsItem = ({ instructorItem }) => {
  const { image, name, email } = instructorItem;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        
          <div className="h-32 w-28">
          <img className="h-32 w-28 rounded-md"
            src={`${image ? image : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}`}
            alt="name"
          />
          </div>
        
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          
        </div>
      </div>
    </div>
  );
};

export default InstructorsItem;
