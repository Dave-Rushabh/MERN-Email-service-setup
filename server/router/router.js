const express = require("express");
const {
  sendContactFormDataToEmail,
} = require("../controllers/contactController");

// using express's Router for routing the requests
const router = express.Router();

// creating the endpoints

router.route("/contact").post(sendContactFormDataToEmail);

module.exports = { router };
