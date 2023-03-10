import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const ReviewCarousel = ({ image1, image2, image3, image4 }) => (
  <div className="carousel max-w-lg mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-2 ">
    <div id="slide1" className="carousel-item relative w-full">
      <GatsbyImage image={image1} alt="Review1" className="h-fit w-fit" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <GatsbyImage image={image2} alt="Review2" className="h-auto w-fit" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <GatsbyImage image={image3} alt="Review 3" className="h-fit w-fit" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide4" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <GatsbyImage image={image4} alt="Review4" className="h-fit w-fit" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide1" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
);

export default ReviewCarousel;
