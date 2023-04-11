import * as React from "react";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import RoomCardBack from "../components/RoomCardBack";
import { graphql, Link, useStaticQuery } from "gatsby";
export default function Home() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     mineLogo: file(relativePath: { eq: "images/MineTrapImage.jpeg" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 600, height: 600)
  //       }
  //     }

  //     pirateLogo: file(relativePath: { eq: "images/PirateBootyImage.jpeg" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 600, height: 600)
  //       }
  //     }
  //     parlorLogo: file(relativePath: { eq: "images/ParlorImage.jpeg" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 600, height: 600)
  //       }
  //     }
  //     travelerLogo: file(relativePath: { eq: "images/TravelersRoomPic.jpeg" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 600, height: 600)
  //       }
  //     }
  //   }
  // `);
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDataJson {
        edges {
          node {
            rooms {
              cost
              id
              length
              players
              title
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
  console.log(data.allDataJson.edges[1].node.rooms);

  return (
    <Layout>
      <div className="w-[90%] flex justify-center bg-neutral py-2 rounded-2xl mx-auto my-6">
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
      {/* <RoomCard
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
        length="currently closed. &nbsp;"
      />
      <RoomCardBack /> */}
      {data.allDataJson.edges[1].node.rooms.map((room) => (
        <RoomCard key={room.id} room={room} image={room.image} />
      ))}
    </Layout>
  );
}
export function Head() {
  return (
    <>
      <title>Escape Room Park City</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#191D24" />
    </>
  );
}
