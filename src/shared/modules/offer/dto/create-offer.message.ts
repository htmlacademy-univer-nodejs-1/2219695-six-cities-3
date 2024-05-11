export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 100',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  city: {
    invalid: 'city must be value from City Enum',
  },
  photos: {
    invalidFormat: 'Images must be an array',
  },
  premium: {
    invalidFormat: 'Must be Boolean',
  },
  favorite: {
    invalidFormat: 'Must be Boolean',
  },
  rating: {
    minValue: 'Minimum price is 1',
    maxValue: 'Maximum price is 5',
    invalidFormat: 'Must be Number',
  },
  type: {
    invalid: 'type must be value from OfferType Enum',
  },
  roomCount: {
    minValue: 'Minimum roomCount is 1',
    maxValue: 'Maximum roomCount is 8',
    invalidFormat: 'Must be Number',
  },
  guestCount: {
    minValue: 'Minimum guestCount is 1',
    maxValue: 'Maximum guestCount is 10',
    invalidFormat: 'Must be Number',
  },
  price: {
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
    invalidFormat: 'Price must be an Number',
  },
  amenities: {
    invalidFormat: 'Must be an array',
    invalidAmenityFormat: 'amenity must be value from Amenity Enum'
  },
  userId: {
    invalidId: 'userId field must be a valid id',
  },
  latitude: {
    invalidFormat: 'Must be Number',
  },
  longitude: {
    invalidFormat: 'Must be Number',
  }
} as const;

