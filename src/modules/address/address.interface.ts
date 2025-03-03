import { ADDRESS_CONSTANTS } from './address.constant';
import { Model, ObjectId } from 'mongoose';

export type IAddressStatus =
  (typeof ADDRESS_CONSTANTS.STATUS.STATUS_OBJECT)[keyof typeof ADDRESS_CONSTANTS.STATUS.STATUS_OBJECT];

export type IAddress = {
  _id: ObjectId;
  user: ObjectId; // Reference to User collection
  status: IAddressStatus;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AddressModel = Model<IAddress, Record<string, unknown>>;
