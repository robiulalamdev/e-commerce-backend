const roles_object = {
  ADMIN: 'Admin',
  MODERATOR: 'Moderator',
  USER: 'User',
};

const userRoleEnum: string[] = [
  roles_object.ADMIN,
  roles_object.MODERATOR,
  roles_object.USER,
];

export const USER_CONSTANTS = {
  ROLES_OBJECT: roles_object,
  ROLES_ENUM: userRoleEnum,
};
