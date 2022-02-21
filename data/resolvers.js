import { Friends } from "./dbConnectors";

// resolver map
export const resolvers = {
  Query: {
    getFriend: ({ id }) => new Friend(id, friendDatabase[id]),
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const { _id, ...friend } = input;
      const newFriend = new Friends({ ...friend });
      newFriend.id = _id;

      return new Promise((resolve, reject) => {
        newFriend.save((err) => {
          err ? reject(err) : resolve(newFriend);
        });
      });
    },
  },
};
