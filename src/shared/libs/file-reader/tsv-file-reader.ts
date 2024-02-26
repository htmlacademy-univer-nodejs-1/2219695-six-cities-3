import {FileReader} from './file-reader.interface';
import {readFileSync} from 'node:fs';
import {Offer} from '../../types/offer.type';
import {City} from '../../types/city.enum';
import {OfferType} from '../../types/offer-type.enum';
import {Amenity} from '../../types/amenity.enum';
import {UserType} from '../../types/user-type.enum';

export class TsvFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly filename: string) {}

  public read() {
    this.rawData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map(([title,
        description,
        createdDate,
        city,
        previewImage,
        photos,
        premium,
        favorite,
        rating,
        type,
        roomCount,
        guestCount,
        price,
        amenities,
        name,
        email,
        avatar,
        password,
        userType,
        coordinates]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        previewImage,
        photos: photos.split(';'),
        premium: premium.toLowerCase() === 'true',
        favorite: favorite.toLowerCase() === 'true',
        rating: Number.parseInt(rating, 10),
        type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
        roomCount: Number.parseInt(roomCount, 10),
        guestCount: Number.parseInt(guestCount, 10),
        price: Number.parseInt(price, 10),
        amenities: amenities
          .split(';')
          .map((amenity) => Amenity[amenity as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge']),
        user: {
          name,
          email,
          avatar,
          password,
          type: UserType[userType as 'Normal' | 'Pro']
        },
        commentCount: 0,
        coordinates: {
          latitude: Number.parseFloat(coordinates.split(';')[0]),
          longitude: Number.parseFloat(coordinates.split(';')[1])
        }
      }));
  }
}
