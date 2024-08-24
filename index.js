const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());

app.use("/products", require("./Routes/productRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server Started On PORT ${process.env.PORT}`.yellow.bold)
);
