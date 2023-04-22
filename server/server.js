const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./router/router");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server successfully started on ${process.env.SERVER_PORT}`);
});

// listen to the routes
app.use("/api", router);
