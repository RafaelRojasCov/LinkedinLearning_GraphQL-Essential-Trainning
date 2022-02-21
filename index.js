import express from "express";
import { schema } from "./data/schema";
import { graphqlHTTP } from "express-graphql";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQl is amazing!");
});

const params = {
  schema,
  graphiql: true,
};

app.use("/graphql", graphqlHTTP(params));

app.listen(PORT, () =>
  console.log(`Running server on http://localhost:${PORT}`)
);
