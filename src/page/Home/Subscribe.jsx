import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Subscribe = () => {
    useEffect(() => {
        AOS.init();
    },[])
    return (
        <div className="sm:my-44 my-0">
            <div className=" h-[346px] bg-gradient-to-r from-indigo-500 via-blue-800 to-blue-900 py-11">

            <div className="row">
                <div className="md:col-6 mb-44">
                    <img data-aos="fade-left" className="md:-mt-[200px] sm:w-full w-44 hidden sm:block"  src="https://i.ibb.co/dMmV10q/image-cta-home-1-800x606.png" alt="" />
                </div>
                <div className="md:col-6 sm:mt-10 pl-6 -mt-40">
                    <h3 className="text-4xl font-semibold text-white">LEAVE US YOUR EMAIL TO STAY <br /> UP TO DATE!</h3>

                    <div className="">
                        <input type="email"  className="input p-7 my-4 w-3/6" placeholder="Email"/>
                        <button className=" bg-orange-600 p-4 rounded-md mx-3 text-lg  mt-4">Subscribe</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Subscribe;