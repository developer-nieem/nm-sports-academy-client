import { Helmet } from "react-helmet";
import dashboard from "../../../../../public/dashboard.json";
import Lottie from "lottie-react";
const StudentsUser = () => {
  return (
    <div>
      <Helmet>
        <title>
           Dashboard - Elevate Your Game with Expert Coaching and Training
        </title>
      </Helmet>
      <Lottie animationData={dashboard} loop={true} />
    </div>
  );
};

export default StudentsUser;
