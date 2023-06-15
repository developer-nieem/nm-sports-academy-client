import Banner from "../Banner";
import Classes from "../Classes/Classes";
import ComingMatch from "../ComingMatch";
import Instructors from "../Instructors/Instructors";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Elevate Your Game with Expert Coaching and Training</title>
      </Helmet>
      <Banner></Banner>
      <Classes></Classes>

      <Instructors></Instructors>
      <ComingMatch></ComingMatch>
    </div>
  );
};

export default Home;
