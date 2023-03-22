import React from "react";
import Layout from "../components/Layout";
const sanitation = () => {
  return (
    <Layout>
      <div class="container px-5 py-12 mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
            Sanitation and Health
          </h2>
          <p className="mt-2 mb-1 text-lg leading-7">
            Our goal is to keep everyone healthy.
          </p>
        </div>
        <div className="container py-8 flex-col justify-center">
          <h4 className="text-lg">
            How we can protect you from viruses & bacteria:
          </h4>
          <ul>
            <h5>Escape Room Park City protects your health by:</h5>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default sanitation;
