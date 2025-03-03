import { model, Schema } from 'mongoose';
import { IWishlist, IWishlistModel } from './wishlist.interface';

const WishlistSchema = new Schema<IWishlist>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', index: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', index: true },
  },
  { timestamps: true },
);

export const Wishlist = model<IWishlist, IWishlistModel>(
  'Wishlist',
  WishlistSchema,
);
export default Wishlist;
