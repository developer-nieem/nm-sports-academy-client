import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/cricket.json";
import { Fade } from "react-awesome-reveal";

const ComingMatch = () => {
  return (
    <div className="p-10">
    
        <div className="md:grid md:grid-cols-2 items-center">
        <div className="   space-y-3">

      <div className="md:w-96 m-auto">
      <Lottie animationData={groovyWalkAnimation} loop={true} />

      </div>
       
          
        </div>
          <div  >
            <div  >
            <h1 className="text-5xl font-bold"> Match ot the  year is coming  </h1>
            <p className="py-6">
            Next Class Running is a dynamic and engaging running program designed for individuals of all fitness levels who are passionate about running or looking to improve their running skills. Led by experienced coaches, Next Class Running offersa supportive and motivating environment where participants can enhance their running technique, build endurance, and achieve their personal fitness goals.
            </p>
            <button className="btn btn-primary">Start Learning</button>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default ComingMatch;
