import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
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
              author
              content
              date
              id
              platform
              rating
              image {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData
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
      {data.allDataJson.edges.forEach((review) => {
        const image = getImage(review.image);
        console.log(image);
      })}
      {data.allDataJson.edges[0].node.reviews.map((review) => (
        <ReviewCard key={review.id} review={review} image={review.image} />
      ))}
    </Layout>
  );
};

export default Reviews;
