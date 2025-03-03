import { Model, ObjectId } from 'mongoose';

export type ICategory = {
  _id: ObjectId;
  name: string;
  slug: string;
  description?: string;
  parent?: ObjectId;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type ICategoryModel = Model<ICategory, Record<string, unknown>>;
