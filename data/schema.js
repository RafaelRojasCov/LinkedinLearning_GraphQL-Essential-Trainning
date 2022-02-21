import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    language: String
    gender: Gender
    age: Int
    emails: String
    contacts: [ContactInput]
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    language: String
    gender: Gender
    age: Int
    emails: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getFriend(id: ID): Friend
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
