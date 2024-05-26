import {Good, City, OfferType, Location} from '../../../types/index.js';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber, IsObject,
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

  @IsObject({message: CreateOfferValidationMessage.city.invalid})
  public city: City;

  public previewImage: string;

  @IsArray({message: CreateOfferValidationMessage.photos.invalidFormat})
  public images: string[];

  @IsBoolean({message: CreateOfferValidationMessage.premium.invalidFormat})
  public isPremium: boolean;

  @IsEnum(OfferType, {message: CreateOfferValidationMessage.type.invalid})
  public type: OfferType;

  @Min(1, {message: CreateOfferValidationMessage.roomCount.minValue})
  @Max(8, {message: CreateOfferValidationMessage.roomCount.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.roomCount.invalidFormat})
  public bedrooms: number;

  @Min(1, {message: CreateOfferValidationMessage.guestCount.minValue})
  @Max(10, {message: CreateOfferValidationMessage.guestCount.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.guestCount.invalidFormat})
  public maxAdults: number;

  @Min(100, {message: CreateOfferValidationMessage.price.minValue})
  @Max(1000000, {message: CreateOfferValidationMessage.price.maxValue})
  @IsNumber({}, {message: CreateOfferValidationMessage.price.invalidFormat})
  public price: number;

  @IsArray({message: CreateOfferValidationMessage.amenities.invalidFormat})
  @IsEnum(Good, {each: true, message: CreateOfferValidationMessage.amenities.invalidAmenityFormat})
  public goods: Good[];

  public host: string;

  @IsObject({message: CreateOfferValidationMessage.longitude.invalidFormat})
  public location: Location;
}
