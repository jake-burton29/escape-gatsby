import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const ReviewCard = ({ review, image }) => {
  const { title, rating, author, content, platform, link, date } = review;
  console.log(title);
  return (
    <div className="card lg:card-side bg-slate-100 shadow-xl text-black my-6 max-w-full md:mx-24 pb-0 ">
      <div className="card-body">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-title underline"
        >
          {title}
        </a>
        <p>{author}</p>
        {rating === 5 && (
          <div className="rating">
            <input
              disabled
              name="rating2"
              className="mask mask-star-2 bg-green-500"
            ></input>
            <input
              disabled
              name="rating2"
              className="mask mask-star-2 bg-green-500"
            ></input>
            <input
              disabled
              name="rating2"
              className="mask mask-star-2 bg-green-500"
            ></input>
            <input
              disabled
              name="rating2"
              className="mask mask-star-2 bg-green-500"
            ></input>
            <input
              disabled
              name="rating2"
              className="mask mask-star-2 bg-green-500"
            ></input>
          </div>
        )}
        <p> {content}</p>
        <p>Date: {date}</p>
        <p>From: {platform}</p>
      </div>
      {image && (
        <figure className="w-2/3 mx-auto rounded-t-xl">
          <GatsbyImage
            loading="lazy"
            className="min-w-full min-h-fit aspect-square"
            image={getImage(image.src.childImageSharp.gatsbyImageData)}
            alt={image.alt}
          />
        </figure>
      )}
    </div>
  );
};

export default ReviewCard;
