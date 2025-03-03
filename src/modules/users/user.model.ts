import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { USER_CONSTANTS } from './user.constant';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: USER_CONSTANTS.ROLES.ROLES_ENUM,
      default: USER_CONSTANTS.ROLES.ROLES_OBJECT.USER,
      required: true,
    },
    status: {
      type: String,
      enum: USER_CONSTANTS.STATUS.STATUS_ENUM,
      default: USER_CONSTANTS.STATUS.STATUS_OBJECT.ACTIVE,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds),
  );
  next();
});

export const User = model<IUser, UserModel>('User', userSchema);
