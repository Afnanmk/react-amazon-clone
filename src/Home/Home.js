import React from "react";
import "./Home.css";
import Product from "./Product";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <div className="home">
      {/* <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      /> */}
      <ImageSlider />

      {/* Product */}

      {/* 1st ROW */}
      <div className="home__row">
        <Product
          id="12321341"
          title="JavaScript Recipes: A Problem-Solution Approach 1st ed. Edition, Kindle Edition"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41yDclXqvwL._SX348_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321342"
          title="YHLSJY Unisex Among Us Hoodie Sweatshirt Hooded Pullover for Mens/Womens/Youth"
          price={12.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/71r+4cJ4nvL._AC_UL320_.jpg"
        />
        <Product
          id="12321343"
          title="TIJN Blue Light Block Glasses Round Optical Eyewear Non-prescription Eyeglasses Frame"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51LwQnl4QGL._AC_UL320_.jpg"
        />
        <Product
          id="12321344"
          title="Best Seller
Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In..."
          price={10.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31mcmc5f35L._AC_US160_.jpg"
        />
      </div>

      {/* 2nd ROW */}
      <div className="home__row">
        <Product
          id="12321345"
          title="KYOETSU Men's Japanese Wooden One Tooth Geta Sandals"
          price={24.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ZMAQB5M7L._AC_UL320_.jpg"
        />
        <Product
          id="12321346"
          title="Kamado Tanjirou Earrings Hanafuda earrings from manga series Demon Slayer:Kimetsu no Yaiba"
          price={149.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/51sOuyRoKQL._AC_UL320_.jpg"
        />
        <Product
          id="12321347"
          title="MANSHU 4 PCS Women Soft Chiffon Scarves Shawl Long Scarf Wrap Scarves."
          price={21.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81N9xhMMRRL._AC_UL320_.jpg"
        />
        <Product
          id="12321348"
          title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller"
          price={21.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_UL160_SR160,160_.jpg"
        />
      </div>

      {/* 3rd ROW */}
      <div className="home__row">
        <Product
          id="12321349"
          title="SUBANG 1200 Pieces Sewing Pins 38mm Multicolor Pearlized Head Pins"
          price={10.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81EKZnMAeNL._AC_UL320_.jpg"
        />
        <Product
          id="123213410"
          title="DecoBros Kitchen Counter and Cabinet Pan Organizer Shelf Rack, Bronze"
          price={149.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/81jofg5REML._AC_UL320_.jpg"
        />
        <Product
          id="123213411"
          title="Clear Cosmetic Storage Organizer - Easily Organize Your Cosmetics, Jewelry and Hair Accessories..."
          price={24.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/A1E3XADJJmL._AC_UL320_.jpg"
        />
        <Product
          id="123213412"
          title="AirExpect Makeup Mirror Vanity Mirror with Lights - 3 Color Lighting Modes 72 LED Trifold Mirror, Touch Control..."
          price={24.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/610fJqrt0FL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
