import {Amenity, City, OfferType} from '../../../types/index.js';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsMongoId,
  IsNumber,
  Max,
  MaxLength,
  Min,
  MinLength
} from 'class-validator';
import {CreateOfferValidationMessage} from './create-offer.message.js';

export class CreateOfferDto {
  @MinLength(10, {message: CreateOfferValidationMessage.title.minLength})
  @MaxLength(100, {message: CreateOfferValidationMessage.title.maxLength})
  public title: string;

  @MinLength(20, {message: CreateOfferValidationMessage.description.minLength})
  @MaxLength(1024, {message: CreateOfferValidationMessage.description.maxLength})
  public description: string;

  @IsDateString({}, {message: CreateOfferValidationMessage.postDate.invalidFormat})
  public postDate: Date;

  @IsEnum(City, {message: CreateOfferValidationMessage.city.invalid})
  public city: City;

  public previewImage: string;

  @IsArray({message: CreateOfferValidationMessage.photos.invalidFormat})
  public photos: string[];

  @IsBoolean({message: CreateOfferValidationMessage.premium.invalidFormat})
  public premium: boolean;

  @IsBoolean({message: CreateOfferValidationMessage.favorite.invalidFormat})
  public favorite: boolean;

  @Min(1, {message: CreateOfferValidationMessage.rating.minValue})
  @Max(5, {message: CreateOfferValidationMessage.rating.maxValue})
  @IsNumber({maxDecimalPlaces: 1}, {message: CreateOfferValidationMessage.rating.invalidFormat})
  public rating: number;

  @IsEnum(OfferType, {message: CreateOfferValidationMessage.type.invalid})
  public type: OfferType;

  @Min(1, {message: CreateOfferValidationMessage.roomCount.minValue})
  @Max(8, {message: CreateOfferValidationMessage.roomCount.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.roomCount.invalidFormat})
  public roomCount: number;

  @Min(1, {message: CreateOfferValidationMessage.guestCount.minValue})
  @Max(10, {message: CreateOfferValidationMessage.guestCount.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.guestCount.invalidFormat})
  public guestCount: number;

  @Min(100, {message: CreateOfferValidationMessage.price.minValue})
  @Max(1000000, {message: CreateOfferValidationMessage.price.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
  public price: number;

  @IsArray({message: CreateOfferValidationMessage.amenities.invalidFormat})
  @IsEnum(Amenity, { each: true, message: CreateOfferValidationMessage.amenities.invalidAmenityFormat })
  public amenities: Amenity[];

  @IsMongoId({message: CreateOfferValidationMessage.userId.invalidId})
  public userId: string;

  @IsNumber({}, {message: CreateOfferValidationMessage.latitude.invalidFormat})
  public latitude: number;

  @IsNumber({}, {message: CreateOfferValidationMessage.longitude.invalidFormat})
  public longitude: number;
}
