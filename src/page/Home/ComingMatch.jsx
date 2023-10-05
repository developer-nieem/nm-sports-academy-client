import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/cricket.json";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const ComingMatch = () => {
  useEffect(() => {
    AOS.init();
},[])
  return (
    <div className="p-10">
    
        <div className="md:grid md:grid-cols-2 items-center">
        <div className="   space-y-3">

      <div className="md:w-96 m-auto">
      <Lottie  data-aos="zoom-in-right" animationData={groovyWalkAnimation} loop={true} />

      </div>
       
          
        </div>
          <div  >
            <div >
              <h4 className="text-orange-400">We are the best * -----</h4>
            <h1 className="text-5xl font-bold"> Match of the  year is coming  </h1>
            <p className="py-6">
            Next Class Running is a dynamic and engaging running program designed for individuals of all fitness levels who are passionate about running or looking to improve their running skills. Led by experienced coaches, Next Class Running offersa supportive and motivating environment where participants can enhance their running technique, build endurance, and achieve their personal fitness goals.
            </p>
            <button className="btn btn-primary">Start Learning</button>

            <ul className="flex gap-10 ml-11 mt-9">
              <li className="list-disc ">Team unity</li>
              <li className="list-disc">Youth Academy</li>
            </ul>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default ComingMatch;
