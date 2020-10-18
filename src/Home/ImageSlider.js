import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Home.css";

function Footer() {
  const images = [
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
    }
  ];
  return (
    <div className="home__image">
      <SimpleImageSlider
        width={1349}
        height={504}
        images={images}
        slideDuration={0.5}
        navStyle={2}
        showNavs={true}
        showBullets={true}
      />
    </div>
  );
}

export default Footer;
