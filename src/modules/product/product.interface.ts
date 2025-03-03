import { Model, ObjectId } from 'mongoose';
import { PRODUCT_CONSTANTS } from './product.constant';

type IProductVariation = {
  attributes: Record<string, string>;
  price: number;
  stock: number;
  sku: string;
};

// by type of PRODUCT_CONSTANTS.DISCOUNT.TYPE
type IProductDiscountType =
  (typeof PRODUCT_CONSTANTS.DISCOUNT.TYPE)[keyof typeof PRODUCT_CONSTANTS.DISCOUNT.TYPE];

type IProductDiscount = {
  amount: number;
  type: IProductDiscountType;
  expiresAt?: Date;
};

export type IProduct = {
  _id: ObjectId;
  name: string;
  description: string;
  shortDescription: string;
  category: ObjectId;
  brand?: string;
  images: string[];
  variations?: IProductVariation[];
  price?: number;
  discount?: IProductDiscount;
  isActive: boolean;
};

export type IProductModel = Model<IProduct, Record<string, unknown>>;
