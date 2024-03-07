import {FileReader} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';
import {Offer, City, OfferType, Amenity, UserType} from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly filename: string) {}

  public read() {
    this.rawData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    const offers: Offer[] = [];

    for (const row of this.rawData.split('\n')) {
      if (row.trim().length === 0) {
        continue;
      }

      const [
        title,
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
        coordinates
      ] = row.split('\t');

      const offer: Offer = {
        title,
        description,
        postDate: new Date(createdDate),
        city: city as City,
        previewImage,
        photos: photos.split(';'),
        premium: premium.toLowerCase() === 'true',
        favorite: favorite.toLowerCase() === 'true',
        rating: Number.parseInt(rating, 10),
        type: type as OfferType,
        roomCount: Number.parseInt(roomCount, 10),
        guestCount: Number.parseInt(guestCount, 10),
        price: Number.parseInt(price, 10),
        amenities: amenities
          .split(';')
          .map((amenity) => amenity as Amenity),
        user: {
          name,
          email,
          avatar,
          password,
          type: userType as UserType
        },
        commentCount: 0,
        coordinates: {
          latitude: Number.parseFloat(coordinates.split(';')[0]),
          longitude: Number.parseFloat(coordinates.split(';')[1])
        }
      };

      offers.push(offer);
    }

    return offers;
  }
}
