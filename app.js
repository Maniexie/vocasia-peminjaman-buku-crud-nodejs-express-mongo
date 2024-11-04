const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const connectDB = require("./config/mongodb");
const app = express();
const cors = require("cors");

routes.use(cors());
dotenv.config();

const port = process.env.PORT;

connectDB();

app.use(express.json());

// routes setup
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
