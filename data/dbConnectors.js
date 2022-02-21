import mongoose from "mongoose";

const dbUsername = "rafaelrojascov";
const dbPassword = "FcOXQbq3UhR5243H";
const dbHost = "cluster0.h6kis.mongodb.net";
const dbName = "graphql_test";
const dbUrl = `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log("Connection error", err));
dbConnection.once("open", () => console.log("Connection to DB successfully"));

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  language: {
    type: String,
  },
  email: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});

const Friends = mongoose.model("friends", friendSchema);

export { Friends };
