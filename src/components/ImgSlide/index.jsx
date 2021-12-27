import React from "react";
import { Carusel, Wrap } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carusel } from "../../utils/carusel";
const ImgSlide = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  
  return (
    <div>
      <Carusel {...settings}>
        {carusel.map(({ id, img }) => (
          <Wrap key={id}>
            <a>
              <img src={img} alt="" />
            </a>
          </Wrap>
        ))}
      </Carusel>
    </div>
  );
};
export default ImgSlide;
