import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
const location = () => {
  return (
    <Layout>
      <div class="container px-5 py-12 mx-auto">
        <div className="mx-auto max-w-2xl text-center bg-neutral rounded-2xl p-3 mb-5">
          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
            The First Puzzle is to Find Us!
          </h2>
          <p className=" font-bold mt-2 mb-1 text-lg leading-7">
            Our place can be tough to find!
          </p>
        </div>
        <ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.26167282373!2d-111.4987024845971!3d40.64616187933913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875272bd28ab7645%3A0xc8d6656858698ea3!2s136%20Heber%20Ave%20%23207%2C%20Park%20City%2C%20UT%2084068!5e0!3m2!1sen!2sus!4v1679419393854!5m2!1sen!2sus"
            className="b-0 w-full md:h-[500px] h-[300px] m-x-4"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <li>
            <div className="card card-compact w-auto bg-neutral shadow-xl">
              <figure>
                <GatsbyImage />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  The front of our home, the Gateway Center
                </h2>
              </div>
            </div>
          </li>
          <li>
            <div className="card card-compact w-auto bg-neutral shadow-xl">
              <figure>
                <GatsbyImage />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  The rear entrance (on Swede Alley)
                </h2>
              </div>
            </div>
          </li>
          <li>
            <div className="card card-compact w-auto bg-neutral shadow-xl">
              <figure>
                <GatsbyImage />
              </figure>
              <div className="card-body">
                <h2 className="card-title">We're on the second floor</h2>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default location;
