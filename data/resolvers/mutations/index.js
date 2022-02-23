import { Types } from "mongoose";
import { Friends, Aliens } from "../../dbConnectors";

export const createFriend = async (_, { input }) => {
  try {
    const { id, ...friend } = input;
    const newFriend = new Friends({ ...friend });
    newFriend.save();
    return Promise.resolve(newFriend);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateFriend = async (_, { input }) => {
  try {
    const { id: _id } = input;
    const updatedFriend = await Friends.findOneAndUpdate(
      { _id },
      { ...input },
      { new: true }
    );
    return Promise.resolve(updatedFriend);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteFriend = async (_, { id }) => {
  try {
    const objectId = Types.ObjectId(id);
    await Friends.deleteOne({ id });
    return Promise.resolve("Successfully deleted");
  } catch (error) {
    return Promise.reject(error);
  }
};
