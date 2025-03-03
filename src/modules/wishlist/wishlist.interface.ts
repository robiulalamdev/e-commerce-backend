import { Model, ObjectId } from 'mongoose';

export type IWishlist = {
  _id: ObjectId;
  user: ObjectId;
  product: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type IWishlistModel = Model<IWishlist, Record<string, unknown>>;
