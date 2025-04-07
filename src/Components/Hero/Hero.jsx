import "./Hero.css";
import handIcon from "../../Assets/hand_icon.png";
import arrowIcon from "../../Assets/arrow.png";
import heroImage from "../../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2>selfless@frosty.onion</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <img className="" src={handIcon} alt="hand icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="latest-btn">
          <div>latest collection</div>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
      </div>
      <div className="right">
        <img src={heroImage} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
