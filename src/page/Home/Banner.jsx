import "react-awesome-slider/dist/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style.css"

//  import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {

  return (
    <div>
<Swiper
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src="https://i.ibb.co/cwLFdS4/1.jpg" alt="slide1" />

            <div className="absolute bottom-[30%] left-0 right-0 z-10">
              <button className=" btn btn-primary shadow-2xl  custom-btn text-lg text-white w-56">Learn More</button>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="https://i.ibb.co/8zC3GVX/4.jpg" alt="slide1" />

            <div className="absolute bottom-[30%] left-0 right-0 z-10">
              <button className=" btn btn-primary shadow-2xl  custom-btn text-lg text-white w-56">Learn More</button>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="https://i.ibb.co/zFs0sBL/2.jpg" alt="slide1" />

            <div className="absolute bottom-[30%] left-0 right-0 z-10">
              <button className=" btn btn-primary shadow-2xl  custom-btn text-lg text-white w-56">Learn More</button>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="https://i.ibb.co/hmzvckQ/3.jpg'" alt="slide1" />

            <div className="absolute bottom-[30%] left-0 right-0 z-10">
              <button className=" btn btn-primary shadow-2xl  custom-btn text-lg text-white w-56">Learn More</button>
              
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>



    </div>
  );
};

export default Banner;
