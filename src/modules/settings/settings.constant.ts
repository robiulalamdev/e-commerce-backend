const settings_theme_object = {
  LIGHT: 'Light',
  DARK: 'Dark',
} as const;

const settings_theme_enum = Object.values(settings_theme_object);

export const SETTINGS_CONSTANTS = {
  THEME: {
    THEME_OBJECT: settings_theme_object,
    THEME_ENUM: settings_theme_enum,
  },
} as const;
