import React from 'react'
import {Carousel} from "react-responsive-carousel"
import { img } from './img/data'
import {} from "./img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";


const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true} //To outo play images
        infiniteLoop={true}
        showIndicators={false} //dot ..
        showThumbs={false}
      >
        {img.map((imageItemlink) => {
          return <img src={imageItemlink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
