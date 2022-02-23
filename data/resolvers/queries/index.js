import { Types } from "mongoose";

import { Friends, Aliens } from "../../dbConnectors";

export const getAllFriends = async () => {
  try {
    const result = await Friends.find({});
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getFriendById = async (_, { id }) => {
  try {
    const objectId = Types.ObjectId(id);
    const result = await Friends.findById(objectId);
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAllAliens = async () => {
  try {
    const result = await Aliens.findAll();
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};
