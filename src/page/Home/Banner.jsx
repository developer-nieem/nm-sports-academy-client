import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
    return (
        <div >
            <Carousel autoPlay infiniteLoop>
                <div className=" md:h-[600px]">
                    <img  src='https://i.ibb.co/cwLFdS4/1.jpg' />
                   
                    
                </div>
                <div className="md:h-[600px]" >
                    <img src='https://i.ibb.co/8zC3GVX/4.jpg' />
                    
                </div>
                <div className="md:h-[600px]">
                    <img src='https://i.ibb.co/zFs0sBL/2.jpg' />
                 
                </div>
                <div className="md:h-[600px]">
                    <img src='https://i.ibb.co/hmzvckQ/3.jpg' />
                 
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;