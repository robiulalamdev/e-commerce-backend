import { Model, ObjectId } from 'mongoose';
import { SETTINGS_CONSTANTS } from './settings.constant';

type ISettingsTheme =
  (typeof SETTINGS_CONSTANTS.THEME.THEME_OBJECT)[keyof typeof SETTINGS_CONSTANTS.THEME.THEME_OBJECT];

export type ISettings = {
  _id: ObjectId;
  user: ObjectId;
  theme: ISettingsTheme;
  notifications: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type ISettingsModel = Model<ISettings, Record<string, unknown>>;
