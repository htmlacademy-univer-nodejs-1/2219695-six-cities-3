import {User, UserType} from '../../types/index.js';
import {defaultClasses, getModelForClass, prop} from '@typegoose/typegoose';

export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({
    required: true,
    type: () => String
  })
  public name: string;

  @prop({
    unique: true,
    required: true,
    type: () => String
  })
  public email: string;

  @prop({
    required: false,
    default: '',
    type: () => String
  })
  public avatar: string;

  @prop({
    required: true,
    type: () => String
  })
  public password: string;

  @prop({
    required: true,
    type: () => String,
    enum: UserType
  })
  public type: UserType;
}

export const UserModel = getModelForClass(UserEntity);
