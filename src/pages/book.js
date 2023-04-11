import React from "react";
import Layout from "../components/Layout";
const book = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl p-2 font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
          Booking
        </h2>
        <div className="card w-full bg-base-300 shadow-xl">
          <h2 className="mt-3 text-2xl font-semibold">Please Note:</h2>
          <div className="card-body">
            <p>
              You may be sharing a room with other guests. If you would like to
              have the room to yourself, choose “Private Event” for that time,
              pricing may increase.
            </p>
            <ul>
              <li>
                Mine Trap & The Great Pirate Escape - Great for adults and kids
                alike, at least one parent must be present.
              </li>
              <li>
                The Parlor & Travel Room(when avaiable) - Better for adults and
                mature teens Please arrive on time for your ticketed start time.
              </li>
              <li>
                All sales are final. We may charge a of up to $40 to change your
                reserved time, if available.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default book;
