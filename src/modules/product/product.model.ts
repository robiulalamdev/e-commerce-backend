import { Schema, model, Document } from 'mongoose';
import { IProduct, IProductModel } from './product.interface';

// 🛍️ Product Variation Schema (Supports multiple attributes like color, size, etc.)
const ProductVariationSchema = new Schema({
  attributes: { type: Map, of: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0, default: 0 },
  sku: { type: String, unique: true, required: true },
});

// 🛍️ Discount Schema (Optional: Percentage or Fixed)
const DiscountSchema = new Schema({
  amount: { type: Number, required: true, min: 0 },
  type: { type: String, enum: ['percentage', 'fixed'], required: true },
  expiresAt: { type: Date, required: false }, // Expiration date (optional)
});

// 🛍️ Product Schema
const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    brand: { type: String, required: false },
    images: [{ type: String, required: true }],
    variations: { type: [ProductVariationSchema], default: [] }, // Optional, default empty array
    price: {
      type: Number,
      required: function (this: { variations: any[] }): boolean {
        return this.variations.length === 0;
      },
    }, // Only required if no variations
    discount: DiscountSchema,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Product = model<IProduct, IProductModel>('Product', ProductSchema);
export default Product;
