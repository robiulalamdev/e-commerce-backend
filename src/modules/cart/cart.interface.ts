import { Model, ObjectId } from 'mongoose';

type ICartItem = {
  product: ObjectId;
  quantity: number;
  price: number;
  addedAt: Date;
};

export type ICart = {
  _id: ObjectId;
  user: ObjectId;
  items: ICartItem[];
  totalPrice: number;
};

export type ICartModel = Model<ICart, Record<string, unknown>>;
