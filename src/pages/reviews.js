import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ReviewCard from "../components/ReviewCard";
const Reviews = () => {
  const data = useStaticQuery(graphql`
    query ReviewQuery {
      allDataJson {
        edges {
          node {
            reviews {
              title
              author
              content
              date
              id
              platform
              rating
              link
              image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(data.allDataJson.edges[0].node.reviews);
  return (
    <Layout>
      <div className="container flex justify-center bg-neutral py-2 rounded-2xl mx-auto my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
              Reviews
            </h1>
            <p className="py-1">Leave us a review!</p>
            <ul className="pt-1 flex flex-row justify-center gap-2">
              <li>
                <a
                  href="https://www.tripadvisor.com/UserReviewEdit-g57097-d10403313-Escape_Room_Park_City-Park_City_Utah.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle bg-neutral"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43a5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598a6 6 0 0 0 6-5.998a5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118a4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115a4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256a2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256a2.128 2.128 0 0 0 0-4.256z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.tripadvisor.com/UserReviewEdit-g57097-d10403313-Escape_Room_Park_City-Park_City_Utah.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle bg-neutral"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/escaperoomparkcity/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle bg-neutral"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {data.allDataJson.edges[0].node.reviews.map((review) => (
        <ReviewCard key={review.id} review={review} image={review.image} />
      ))}
    </Layout>
  );
};

export default Reviews;
