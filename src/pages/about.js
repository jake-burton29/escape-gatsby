import React from "react";
import Layout from "../components/Layout";
const about = () => {
  return (
    <Layout>
      <div className="container flex justify-center bg-neutral py-2 rounded-2xl mx-auto my-6">
        <div className="hero-content text-center">
          <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
            About Us
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default about;
