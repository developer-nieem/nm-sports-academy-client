import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const img_hosting_token = import.meta.env.VITE_IMAGE_API;

const AddClass = () => {

    const {user} = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageRes =>{
            
            const imgURL = imageRes.data.display_url;
            const {name, instructor, email, available_seats, price, status,  students} = data;

            const newClass = {name, instructor, email, available_seats: parseFloat(available_seats), price: parseFloat(price) , students: parseFloat(students), image: imgURL , status }

            console.log(newClass);

            axios.post('https://assignment12-server-developer-nieem.vercel.app/classes',  newClass )
    .then(res => {
    
        if (res.data.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added successful!',
                showConfirmButton: false,
                timer: 1500
              })
        }
           
            });

        })
        
    };

    return (
        <div>
            
  <div className="hero">
    <div className="card  w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input  {...register("name", { required: true })} type="text" placeholder="Class name" className="input input-bordered" />
        </div>

{/* instructor name and email  */}
        <div className="flex justify-between gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Instructor name</span>
          </label>
          <input value={user?.displayName} {...register("instructor", { required: true })} type="text" placeholder="Instructor name" className="input  input-bordered" />
          
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input value={user?.email} {...register("email", { required: true })} type="email" placeholder="Instructor Email" className="input input-bordered" />
          
        </div>
        </div>


{/* seats and price input section  */}
        <div className="flex justify-between gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input {...register("available_seats", { required: true })} type="text" placeholder="Available seats" className="input  input-bordered" />
          
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered" />
          
        </div>
        </div>

        <label className="label">
            <span className="label-text">Class Image</span>
          </label>
        <input {...register("image", { required: true })}  type="file" className="file-input w-full max-w-xs" />


            {/* hidden input  */}
            <div className="hidden">
            <input {...register("status")} type="text"  value='pending'  />
            <input {...register("students")}  type="text"  value='0'  />
            </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Add a Class</button>
        </div>
      </form>
    </div>
  
</div>
        </div>
    );
};

export default AddClass;