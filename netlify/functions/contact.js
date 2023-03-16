const { send } = require("nodemailer");

exports.handler = async (event) => {
  console.log("THIS IS TOTALLY", event);
  const { firstName, lastName, email, message } = JSON.parse(event.body);

  try {
    const response = await send({
      to: process.env.GATSBY_EMAIL,
      subject: `New message from ${firstName} ${lastName} (${email})`,
      text: message,
    });
    console.log(response);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully." }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending message." }),
    };
  }
};
