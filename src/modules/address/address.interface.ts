import { Model, ObjectId } from 'mongoose';

export type IAddress = {
  _id: ObjectId;
  user: ObjectId; // Reference to User collection
  status: 'Active' | 'Inactive';
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AddressModel = Model<IAddress, Record<string, unknown>>;
