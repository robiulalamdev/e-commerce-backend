import { model, Schema } from 'mongoose';
import { IProfile, IProfileModel } from './profile.interface';

const ProfileSchema = new Schema<IProfile>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
    bio: { type: String },
    socials: {
      type: {
        facebook: { type: String },
        twitter: { type: String },
        instagram: { type: String },
      },
    },
    image: { type: String },
  },
  { timestamps: true },
);

const Profile = model<IProfile, IProfileModel>('Profile', ProfileSchema);

export default Profile;
