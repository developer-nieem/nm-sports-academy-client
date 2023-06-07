import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    const [showPass , setShowPass] =  useState(true)
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-6/12 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email" , { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={`${showPass ? "password" : 'text'}`}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <p className="text-right absolute right-8 mt-11 "><a onClick={() => setShowPass(!showPass)} className="btn btn-circle btn-sm"> <FaEye></FaEye>  </a></p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center py-3"> You have no account? <Link className="underline" to='/register'> Register now </Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
