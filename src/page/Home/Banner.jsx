import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
    return (
        <div >
            <Carousel autoPlay infiniteLoop>
                <div className=" md:h-[560px]">
                    <img  src='https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                   
                    
                </div>
                <div className="md:h-[560px]" >
                    <img src='https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                    
                </div>
                <div className="md:h-[560px]">
                    <img src='https://images.pexels.com/photos/9393464/pexels-photo-9393464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                 
                </div>
                <div className="md:h-[560px]">
                    <img src='https://images.pexels.com/photos/13509971/pexels-photo-13509971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                 
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;