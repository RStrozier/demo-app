import { Link } from "react-router-dom";
import HeroBanner from "../../components/homepage/HeroBanner";
import "./Homepage.css";
import { useEffect } from "react";
import { setupIntersectionObserver } from "../../utilities/IntersectionObserver";
import blackOwnedImage from '../../assets/black-owned-business.jpeg'
import showoffImage from '../../assets/show-off-your-case.jpeg'
import shopLocalImage from '../../assets/shop-local.jpeg'
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  // must have on page to use intersection observer
  useEffect(() => {
    const cleanupObserver = setupIntersectionObserver();

    // Clean up the observers when the component is unmounted
    return cleanupObserver;
  }, []);

  return (
    <>
    <NavBar />
      <div className="homepage-container">

        <div className="homepage-image-container">
        <img 
          className="homepage-image"
          src={showoffImage}></img>
            <img 
          className="homepage-image"
          src={blackOwnedImage}></img>
        </div>

        <div className="half-section">
        <HeroBanner />
        </div>
        <div className="mini-section">
        <img 
          className="shop-homepage-image"
          src={shopLocalImage}></img>
          </div>
          <br />
          <div className="mini-section">
        <Link to="/shop">
          <p>Click Here To Shop</p>
        </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
