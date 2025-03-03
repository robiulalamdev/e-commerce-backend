import { model, Schema } from 'mongoose';
import { ISettings, ISettingsModel } from './settings.interface';
import { SETTINGS_CONSTANTS } from './settings.constant';

const settingsSchema = new Schema<ISettings>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    theme: {
      type: String,
      enum: SETTINGS_CONSTANTS.THEME.THEME_ENUM,
      default: SETTINGS_CONSTANTS.THEME.THEME_OBJECT.LIGHT,
    },
    notifications: {
      type: Boolean,
      default: true,
    },
    emailNotifications: {
      type: Boolean,
      default: true,
    },
    smsNotifications: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Settings = model<ISettings, ISettingsModel>('Settings', settingsSchema);

export default Settings;
