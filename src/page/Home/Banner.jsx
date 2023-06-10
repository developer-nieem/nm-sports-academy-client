import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider>
        <div data-src="https://i.ibb.co/cwLFdS4/1.jpg" />
        <div data-src="https://i.ibb.co/8zC3GVX/4.jpg" />
        <div data-src="https://i.ibb.co/zFs0sBL/2.jpg" />
        <div data-src="https://i.ibb.co/hmzvckQ/3.jpg'" />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
