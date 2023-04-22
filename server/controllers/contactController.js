const expressAsyncHandler = require("express-async-handler");
const { sendMail } = require("../utils/sendMail");

const sendContactFormDataToEmail = expressAsyncHandler(async (req, res) => {
  const { prefix, name, email, contact, subject, description } = req?.body;

  const message = {
    subject,
    description,
    from: email,
    contact,
    name: `${prefix} ${name}`,
  };

  try {
    await sendMail(message);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Error sending email");
  }
});

module.exports = { sendContactFormDataToEmail };
