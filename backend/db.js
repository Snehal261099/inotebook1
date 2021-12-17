const mongoose = require("mongoose");
mongoURI =
  "mongodb+srv://inotebook:c-*j*nwGx!4MM_P@cluster0.zuwun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectToMongoose = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongoose;
