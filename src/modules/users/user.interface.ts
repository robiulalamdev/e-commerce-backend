/* eslint-disable consistent-type-definitions */
import { Model } from 'mongoose';

type IUserRole = 'Admin' | 'Moderator' | 'User';

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: IUserRole;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
