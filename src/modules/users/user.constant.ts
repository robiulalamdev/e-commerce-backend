const roles_object = {
  ADMIN: 'Admin',
  MODERATOR: 'Moderator',
  USER: 'User',
} as const;

const userRoleEnum: string[] = [
  roles_object.ADMIN,
  roles_object.MODERATOR,
  roles_object.USER,
];

const status_object = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  BANNED: 'Banned',
} as const;

const status_enum = Object.values(status_object);

export const USER_CONSTANTS = {
  ROLES: {
    ROLES_OBJECT: roles_object,
    ROLES_ENUM: userRoleEnum,
  },
  STATUS: {
    STATUS_OBJECT: status_object,
    STATUS_ENUM: status_enum,
  },
} as const;
