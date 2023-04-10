import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const ReviewCard = ({ review, image }) => {
  const { title, rating, author, content, platform, link, date, id } = review;
  console.log(id);
  return (
    <div className="card bg-slate-100 shadow-xl text-black my-6 max-w-full md:mx-24 pb-0 xl:mx-56 ">
      <div className="card-body">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-title underline"
        >
          {title}
        </a>
        <p>
          <span className="font-semibold"> by: </span> <span>{author}</span>
        </p>
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
        <div className="flex justify-between items-center">
          <div className="flex-col">
            <p>Date: {date}</p>
            <p>From: {platform}</p>
          </div>
          {image && (
            <div>
              <figure className="ml-auto rounded-xl  md:m-4 w-[140px]">
                <label htmlFor={`my-modal-${id}`}>
                  <GatsbyImage
                    loading="lazy"
                    className="min-w-full min-h-fit hover:opacity-70"
                    image={getImage(image.src.childImageSharp.gatsbyImageData)}
                    alt={image.alt}
                  />
                </label>
                <input
                  type="checkbox"
                  id={`my-modal-${id}`}
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative w-11/12">
                    <label
                      htmlFor={`my-modal-${id}`}
                      className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
                    >
                      ✕
                    </label>
                    <GatsbyImage
                      loading="lazy"
                      className="min-w-full min-h-fit"
                      image={getImage(
                        image.src.childImageSharp.gatsbyImageData
                      )}
                      alt={image.alt}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </figure>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
