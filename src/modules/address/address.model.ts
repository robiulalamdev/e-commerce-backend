import { model, Schema } from 'mongoose';
import { AddressModel, IAddress } from './address.interface';
import { ADDRESS_CONSTANTS } from './address.constant';

const addressSchema = new Schema<IAddress>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ADDRESS_CONSTANTS.STATUS.STATUS_ENUM,
      default: ADDRESS_CONSTANTS.STATUS.STATUS_OBJECT.ACTIVE,
    },
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
