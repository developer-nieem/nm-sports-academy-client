import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import ComingMatch from "../ComingMatch";
import Instructors from "../Instructors/Instructors";
import { Helmet } from "react-helmet";
import JoinTeam from "../JoinTeam";
import Subscribe from "../Subscribe";
import Testimonial from "../Testimonial/Testimonial";

import FaqSection from "../Faq/Faq";
import Contacts from "../Contacts/Contacts";
import Popup from "../../../components/Popup";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Elevate Your Game with Expert Coaching and Training</title>
      </Helmet>
      <Banner></Banner>
      <Classes></Classes>
<Popup></Popup>
      <Instructors></Instructors>
      <ComingMatch></ComingMatch>
      <JoinTeam></JoinTeam>
      <Testimonial></Testimonial>
     <FaqSection></FaqSection>
     <Contacts></Contacts>
      {/* <Subscribe></Subscribe> */}
    </div>
  );
};

export default Home;
