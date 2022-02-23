import mongoose from "mongoose";
import Sequelize from "sequelize";
import _ from "lodash";
import casual from "casual";

const dbUsername = process.env.DB_USER_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
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

// SQL

const sequelize = new Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "./alien.sqlite",
});

const Aliens = sequelize.define("Aliens", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING },
});

Aliens.sync({ force: true }).then(() => {
  _.times(10, (i) =>
    Aliens.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word,
    })
  );
});

export { Friends, Aliens };
