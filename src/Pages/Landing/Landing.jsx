import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { Carousel } from "react-responsive-carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import CarouselEffect from "../../Components/Carousel/Carousel";

const Landing = () => {
  return (
    
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
      </LayOut>
   
  );
};

export default Landing;
