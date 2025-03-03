import { Model, ObjectId } from 'mongoose';

export interface IProfile extends Document {
  _id: ObjectId;
  user: ObjectId;
  bio: string;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IProfileModel = Model<IProfile, Record<string, unknown>>;
