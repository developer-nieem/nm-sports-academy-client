import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from 'sweetalert2'


const Register = () => {
  const { registerUser, userProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [showPassError, setShowPassError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setShowPassError("Password Don't Matched");
    } else {
      setShowPassError("");

      registerUser(data.email, data.confirmPassword)
        .then((result) => {
          const user = result.user;
          console.log(user);
         
         
          const usersInfo = { name: data.name, email: data.email };
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(usersInfo),
          })
            .then((res) => res.json())
            .then(data => {
                if (data.insertedId) {               
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User Create successful",
                      showConfirmButton: false,
                      timer: 1500,
                    })
            }
        })


          userProfile(data.name, data.photo)
            .then((result) => {
              const user = result.user;
              console.log(user);
              navigate("/");
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-6/12 flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.password?.type === "email" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={`${showPass ? "password" : "text"}`}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).*$/,
                  })}
                />

                {/* password validation */}
                {errors.password?.type === "required" && (
                  <p role="alert">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert">Password Must be 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert">
                    Must be need a capital letter and special character
                  </p>
                )}

                <p className="text-right absolute right-8 mt-11 ">
                  <a
                    onClick={() => setShowPass(!showPass)}
                    className="btn btn-circle btn-sm"
                  >
                    {" "}
                    <FaEye></FaEye>{" "}
                  </a>
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={`${showConfirmPass ? "password" : "text"}`}
                  placeholder=" Confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", { required: true })}
                />
                <p className="text-right absolute right-8 mt-11 ">
                  <a
                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                    className="btn btn-circle btn-sm"
                  >
                    <FaEye></FaEye>
                  </a>
                </p>
                <p>
                  <small>{showPassError}</small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center"><SocialLogin></SocialLogin></p>
            <p className="text-center py-3">
              You have already account?
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
