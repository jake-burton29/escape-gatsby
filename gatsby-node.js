// const path = require("path");
// const reviews = require("./src/data/reviews.json");
// const IMAGE_PATH = "./src/images";

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   reviews.forEach((review) => {
//     const { id, title, author, date, rating, content, platform, image, alt } =
//       review;

//     const { name, ext } = path.parse(image);
//     const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);

//     const data = {
//       name,
//       ext,
//       absolutePath,
//       extension: ext.substring(1),
//     };

//     const imageNode = {
//       ...data,
//       id: createNodeId(`review-image-${name}`),
//       internal: {
//         type: "ReviewImage",
//         contentDigest: createContentDigest(data),
//       },
//     };
//     actions.createNode(imageNode);
//     const node = {
//       id: createNodeId(`review-${id}`),
//       title,
//       author,
//       date,
//       rating,
//       content,
//       platform,
//       image: imageNode,
//       internal: {
//         type: "Review",
//         contentDigest: createContentDigest(review),
//       },
//     };
//     actions.createNode(node);
//   });
// };
