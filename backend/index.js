const connectToMongoose = require("./db");
connectToMongoose();

const express = require("express");
const app = express();
const port = 5000;

//for reading the data from the thunderstrom
app.use(express.json());
//Avaiable routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook Backend at http://localhost:${port}`);
});
