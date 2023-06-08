import Lottie from "lottie-react";
import errorAni from "../../../public/error.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="w-1/3  text-center m-auto my-36 ">
            <Lottie animationData={errorAni} loop={true} />
            <Link to='/' className="btn btn-primary">Back To Home</Link>
        </div>
    );
};

export default ErrorPage;