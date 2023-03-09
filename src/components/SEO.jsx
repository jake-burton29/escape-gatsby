// import React from "react";
// import PropTypes from "prop-types";
// import Helmet from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

// const SEO = ({ title, description }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           keywords
//         }
//       }
//     }
//   `);

//   return (
//     <Helmet
//       htmlAttributes={{ lang: `en` }}
//       titleTemplate={`%s | ${data.site.siteMetadata.title}`}
//     >
//       <title>{data.site.siteMetadata.title}</title>
//       <meta
//         name="description"
//         content={description || data.site.siteMetadata.description}
//       />
//       <meta name="keywords" content={data.site.siteMetadata.keywords} />
//       <meta name="author" content={data.site.siteMetadata.author} />
//     </Helmet>
//   );
// };

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// };

// export default SEO;
