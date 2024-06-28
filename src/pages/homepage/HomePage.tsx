import { Link } from "react-router-dom";
import HeroBanner from "../../components/homepage/HeroBanner";
import "./Homepage.css";
import { useEffect } from "react";
import { setupIntersectionObserver } from "../../utilities/IntersectionObserver";
import blackOwnedImage from '../../assets/black-owned-business.jpeg'

const HomePage = () => {
  // must have on page to use intersection observer
  useEffect(() => {
    const cleanupObserver = setupIntersectionObserver();

    // Clean up the observers when the component is unmounted
    return cleanupObserver;
  }, []);

  return (
    <>
      <div className="homepage-container">
          <img 
          className="black-owned-image"
          src={blackOwnedImage}></img>
        <div className="half-section">
        <HeroBanner />
        </div>
        <div className="mini-section">
        <Link to="/shop">
          <p>Click Here To Shop</p>
        </Link>
        [mini-section]
        </div>
      </div>
    </>
  );
};

export default HomePage;
