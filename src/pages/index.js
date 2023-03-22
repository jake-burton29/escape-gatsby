import * as React from "react";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import ReviewCarousel from "../components/ReviewCarousel";
import RoomCardBack from "../components/RoomCardBack";
import { graphql, Link, useStaticQuery } from "gatsby";
export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      mineLogo: file(relativePath: { eq: "images/MineTrapImage.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, height: 600)
        }
      }

      pirateLogo: file(relativePath: { eq: "images/PirateBootyImage.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, height: 600)
        }
      }
      parlorLogo: file(relativePath: { eq: "images/ParlorImage.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, height: 600)
        }
      }
      travelerLogo: file(relativePath: { eq: "images/TravelersRoomPic.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, height: 600)
        }
      }
      review1: file(relativePath: { eq: "images/Review1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 2200, height: 800)
        }
      }

      review2: file(relativePath: { eq: "images/Review2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 3000, height: 800)
        }
      }
      review3: file(relativePath: { eq: "images/Review3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 2200, height: 800)
        }
      }
      review4: file(relativePath: { eq: "images/Review4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 2500, height: 900)
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="hero min-w-screen bg-base-200 bg-inherit py-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
              Escape Room Park City
            </h1>
            <p className="py-1">
              Do you have what it takes to escape?
              {/* Experience mystery, adventure, and teamwork at Escape Room Park
              City. Challenge your mind and thrill your senses as you uncover
              hidden clues, solve puzzles, and unlock secrets. With unique
              themes and surprises, escape rooms are the perfect way to have
              fun, bond with friends, and create unforgettable memories. Book
              your room today and see if you have what it takes to escape! */}
            </p>
            <Link
              to="/book"
              className="md:hidden mt-3 btn bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <RoomCard
        imageData={data.mineLogo.childImageSharp.gatsbyImageData}
        title="The Mine Trap"
        alt="The Mine Trap"
        players="Players: 4 - 10"
        length="Game Length: 70 min"
        cost="Cost per Person: $39.99 + tax"
      />
      <RoomCard
        imageData={data.pirateLogo.childImageSharp.gatsbyImageData}
        title="The Great Pirate Escape"
        alt="The Great Pirate Escape"
        players="Players: 4 - 8"
        length="Game Length: 70 min"
        cost="Cost per Person: $37.99 + tax"
      />
      <RoomCard
        imageData={data.parlorLogo.childImageSharp.gatsbyImageData}
        title="The Parlor"
        alt="The Parlor"
        players="Players: 3 - 6"
        length="Game Length: 70 min"
        cost="Cost per Person: $37.99 + tax"
      />
      <RoomCard
        imageData={data.travelerLogo.childImageSharp.gatsbyImageData}
        title="The Travler's Room"
        alt="Traveler's Room"
        players="This room is"
        length="currently closed."
      />
      <RoomCardBack />
      <ReviewCarousel
        image1={data.review1.childImageSharp.gatsbyImageData}
        image2={data.review2.childImageSharp.gatsbyImageData}
        image3={data.review3.childImageSharp.gatsbyImageData}
        image4={data.review4.childImageSharp.gatsbyImageData}
      />
    </Layout>
  );
}
