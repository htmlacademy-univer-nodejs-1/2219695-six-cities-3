import {Expose} from 'class-transformer';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public postDate: string;

  @Expose()
  public city: string;

  @Expose()
  public previewImage: string;

  @Expose()
  public photos: string[];

  @Expose()
  public premium: boolean;

  @Expose()
  public favorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: string;

  @Expose()
  public roomCount: number;

  @Expose()
  public guestCount: number;

  @Expose()
  public price: number;

  @Expose()
  public amenities: string[];

  // @Expose()
  // public userId: string;

  @Expose()
  public commentCount: number;

  @Expose()
  public latitude: number;

  @Expose()
  public longitude: number;
}
