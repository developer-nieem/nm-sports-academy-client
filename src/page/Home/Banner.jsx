import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <div data-src="https://i.ibb.co/cwLFdS4/1.jpg" />
        <div data-src="https://i.ibb.co/8zC3GVX/4.jpg" />
        <div data-src="https://i.ibb.co/zFs0sBL/2.jpg" />
        <div data-src="https://i.ibb.co/hmzvckQ/3.jpg'" />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
