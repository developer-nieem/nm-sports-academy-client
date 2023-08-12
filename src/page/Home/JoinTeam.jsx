import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
const JoinTeam = () => {

    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div className="bg-slate-200 mt-20">
            
            <div className="row">
            <div className="md:col-6 pl-10 py-20">
                <h3 className="text-xl font-semibold text-orange-400">JOIN OUR TEAM</h3>
               <h2 className="text-4xl font-bold my-4">TALK WITH YOUR FEET. PLAY WITH YOUR HEART.</h2>
               <p >
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque.
               </p>
               
               <Link className="btn btn-outline  btn-primary my-5" to='/login'>JOIN NOW</Link>
               </div>
               <div className="z-10 md:col-6">
                   <div className="join-team bg-slate-400 sm:h-full h-64">
                   
                   </div>
                   <img  data-aos="zoom-in-up"className="sm:-mt-[500px] -mt-[300px] z-10 relative" src="https://i.ibb.co/xD8VVGH/young-player-game-shot-competition-removebg-preview.png" alt="man" />
               </div>
            </div>
           
        </div>
    );
};

export default JoinTeam;