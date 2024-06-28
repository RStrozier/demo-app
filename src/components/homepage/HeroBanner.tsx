import customCaseImage from "../../assets/custom-phone-cases.jpg";
import "../../pages/homepage/Homepage.css";

const HeroBanner = () => {
  return (
    <>
      <div className="art-piece">
        <div className="hero-image-container">
          <img src={customCaseImage} 
          className="hero-image"
          alt="Custom Phone Cases" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
