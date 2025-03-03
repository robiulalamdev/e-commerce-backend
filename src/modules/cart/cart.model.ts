import { Schema, model } from 'mongoose';
import { ICart, ICartModel } from './cart.interface';
import Product from '../product/product.model';

const CartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true },
  addedAt: { type: Date, default: Date.now },
});

// 🛒 Cart Schema
const CartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    items: [CartItemSchema],
    totalPrice: { type: Number, required: true, default: 0 },
  },
  { timestamps: true },
);

// ✅ Pre-save middleware to fetch product price if not set
CartSchema.pre('save', async function (next) {
  const cart = this;

  for (const item of cart.items) {
    // Always fetch product price to ensure consistency
    const product = await Product.findById(item.product).select(
      'price variations',
    );

    if (!product) {
      return next(new Error('Product not found'));
    }

    // Set price based on product variations or single price
    if (product.variations && product.variations.length > 0) {
      item.price = product.variations[0].price; // Use first variation's price
    } else {
      if (!product.price) {
        return next(new Error('Product price is not set'));
      }
      item.price = product.price; // Use product's price
    }
  }

  // ✅ Auto-calculate total price before saving
  cart.totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  next();
});

export const Cart = model<ICart, ICartModel>('Cart', CartSchema);
export default Cart;
