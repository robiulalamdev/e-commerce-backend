import { Schema, model } from 'mongoose';
import { ICart, ICartModel } from './cart.interface';

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

  // Loop through each item in the cart
  for (const item of cart.items) {
    if (!item.price || item.price <= 0) {
      const product = await Product.findById(item.product).select('price'); // Fetch latest price
      if (product) {
        item.price = product.price; // Set price snapshot
      } else {
        return next(new Error('Product not found'));
      }
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
