import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const ReviewCard = ({ review, image }) => {
  const { title, rating, author, content, platform } = review;
  const gatsbyImage = getImage(image);
  console.log(image);
  return (
    <>
      <h1>{title}</h1>
      <p>Rating: {rating}</p>
      <p>Author: {author}</p>
      <p> {content}</p>
      <p>From: {platform}</p>
      {image && (
        <GatsbyImage
          loading="lazy"
          image={getImage(image.src.childImageSharp.gatsbyImageData)}
          alt={image.alt}
        />
      )}
    </>
  );
};

export default ReviewCard;
