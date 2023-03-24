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
                    gatsbyImageData(width: 300, height: 300)
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
      <div className="hero min-w-screen bg-base-200 bg-inherit py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
              Reviews
            </h1>
            <p className="py-1">Some reviews from our incredible customers!</p>
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
