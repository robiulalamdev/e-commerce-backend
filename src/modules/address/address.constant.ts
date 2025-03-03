const address_status = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
} as const;

// Extract the values into an array
const address_status_enum = Object.values(address_status);

// Export constants
export const ADDRESS_CONSTANTS = {
  STATUS: {
    STATUS_OBJECT: address_status,
    STATUS_ENUM: address_status_enum,
  },
} as const;
