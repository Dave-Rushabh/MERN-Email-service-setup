const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "reinhold95@ethereal.email",
    pass: "r9qmC1UM5jFhpzPf67",
  },
});

const sendMail = async (message) => {
  const mailOptions = {
    from: message?.from, // source email
    to: process.env.MY_GMAIL_ADDRESS, // destination email
    subject: `New Business Inquiry from ${message?.name}`,
    html: `
          <p><b>Hi ${process.env.MY_GMAIL_USERNAME},</b></p>
          <p>${message?.name} has contacted you to know more abour your business services.</p>
          <p><b>Subject:</b> ${message?.subject}</p>
          <p><b>Description:</b> ${message?.description}</p>
          <p>You may reach out to ${message?.name} by phone at ${message?.contact} or email at ${message?.from}.</p>
          <hr />
          <p><pre><b>Note:</b> This is a system generated email, no need to reply.</pre></p>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = { sendMail };
