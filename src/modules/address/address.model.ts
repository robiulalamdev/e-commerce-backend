import { model, Schema } from 'mongoose';
import { AddressModel, IAddress } from './address.interface';

const addressSchema = new Schema<IAddress>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  { timestamps: true },
);

const Address = model<IAddress, AddressModel>('Address', addressSchema);

export default Address;
