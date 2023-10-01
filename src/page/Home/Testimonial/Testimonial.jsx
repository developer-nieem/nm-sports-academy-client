
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-cards';

import './testimonial.css'
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  return (
    <div className="p-10">
      <div className="row items-center">
        <div className="sm:col-6 space-y-4">
          <h4 className="text-orange-400 text-xl">--Testimonial</h4>
          <h2 className="text-5xl font-bold">
            See What Our students are saying
          </h2>
          <p>
            Welcome to our collection of inspiring student testimonials. Here,
            you can explore a diverse range of experiences and stories from our
            dedicated learners who have embarked on transformative journeys with
            us. These heartfelt accounts offer a glimpse into the profound
            impact our educational programs have had on their lives and careers.
          </p>
          <p>
            Our students come from all walks of life, each with their unique
            aspirations and goals. By sharing their experiences, they shed light
            on the exceptional guidance, support, and opportunities they have
            found within our educational community. Whether it's a
            career-changing moment, a personal growth revelation, or a profound
            sense of achievement, our students' stories resonate with the
            incredible potential that education can unlock.
          </p>
          <p>
            As you read through these testimonials, we hope you'll be inspired
            by the dedication, resilience, and achievements of our students.
            Their words reflect the essence of what we stand for—an unwavering
            commitment to empowering individuals to reach their fullest
            potential. Join us in celebrating these success stories, and let
            them inspire you on your own educational journey with us. Your
            success story could be the next one we proudly feature.
          </p>
        </div>
        <div className="sm:col-6">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="testimonial-swiper "
          >
            <SwiperSlide className="testimonial-swiper-slider">

                  <div className="p-2" >
                   <div className="flex gap-2 items-center justify-center">
                   <img className="w-28 h-28 rounded-full" src="https://images.pexels.com/photos/7129662/pexels-photo-7129662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                    <div>
                    <h3>Sarah Johnson</h3>
                    <Rating style={{ maxWidth: 100 }} value={ 5} readOnly />
                    </div>
                   </div>
                    
                    <p> Ive had an incredible experience with this program. The instructors are top-notch, and the content is engaging. Highly recommend!</p>
                  </div>

            </SwiperSlide>
            <SwiperSlide className="testimonial-swiper-slider">
            <div className="p-2" >
                   <div className="flex gap-2 items-center justify-center">
                   <img className="w-28 h-28 rounded-full" src="https://images.unsplash.com/photo-1588731234159-8b9963143fca" alt="testimonial" />
                    <div>
                    <h3>John Smith</h3>
                    <Rating style={{ maxWidth: 100 }} value={ 5} readOnly />
                    </div>
                   </div>
                    
                    <p> The support I received here was exceptional. They helped me achieve my career goals. I cant thank them enough!</p>
                  </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-swiper-slider">
            <div className="p-2" >
                   <div className="flex gap-2 items-center justify-center">
                   <img className="w-28 h-28 rounded-full" src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="testimonial" />
                    <div>
                    <h3>Emily Davis</h3>
                    <Rating style={{ maxWidth: 100 }} value={ 5} readOnly />
                    </div>
                   </div>
                    
                    <p> Ive had an incredible experience with this program. The instructors are top-notch, and the content is engaging. Highly recommend!</p>
                  </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-swiper-slider">
            <div className="p-2" >
                   <div className="flex gap-2 items-center justify-center">
                   <img className="w-28 h-28 rounded-full" src="https://images.pexels.com/photos/7129662/pexels-photo-7129662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                    <div>
                    <h3>Michael Lee</h3>
                    <Rating style={{ maxWidth: 100 }} value={ 5} readOnly />
                    </div>
                   </div>
                    
                    <p> Ive had an incredible experience with this program. The instructors are top-notch, and the content is engaging. Highly recommend!</p>
                  </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial-swiper-slider">
            <div className="p-2" >
                   <div className="flex gap-2 items-center justify-center">
                   <img className="w-28 h-28 rounded-full" src="https://images.pexels.com/photos/7129662/pexels-photo-7129662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="testimonial" />
                    <div>
                    <h3>Jennifer Clark</h3>
                    <Rating style={{ maxWidth: 100 }} value={ 5} readOnly />
                    </div>
                   </div>
                    
                    <p> Ive had an incredible experience with this program. The instructors are top-notch, and the content is engaging. Highly recommend!</p>
                  </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
