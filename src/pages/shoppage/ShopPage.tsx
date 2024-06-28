import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import ShopBuckets from "../../components/shoppage/ShopBuckets";
import "./ShopPage.css";

const ShopPage = () => {
  return (
    <>
    <NavBar />
      <div className="shop-page-container">
        <div className="shop-text">Shop Page Coming Soon!</div>
        <ShopBuckets />
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
