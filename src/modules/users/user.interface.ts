import { Model } from 'mongoose';
import { USER_CONSTANTS } from './user.constant';

type IUserRole =
  (typeof USER_CONSTANTS.ROLES.ROLES_OBJECT)[keyof typeof USER_CONSTANTS.ROLES.ROLES_OBJECT];

type IUserStatus =
  (typeof USER_CONSTANTS.STATUS.STATUS_OBJECT)[keyof typeof USER_CONSTANTS.STATUS.STATUS_OBJECT];

export type IUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: IUserRole;
  isVerified: boolean;
  status: IUserStatus;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
