import {UserType} from './user-type.enum';

export type User = {
  name: string;
  email: string;
  avatar: string; //TODO: Возможно стоит сделать сделать не обязательным на уровне типа
  password: string;
  type: UserType;
}
