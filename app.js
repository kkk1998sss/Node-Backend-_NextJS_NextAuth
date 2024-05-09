const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
dotenv.config();
const PORT = 5000;

const route = require("./routes/crud");

app.use('/', route);


//connect to the database
// const dbConnect = require("./database/database");

// dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


