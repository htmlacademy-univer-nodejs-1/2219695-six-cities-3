import {Document, model, Schema} from 'mongoose';
import {User} from '../../types/index.js';

export interface UserDocument extends User, Document {}

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  password: String,
});

export const UserModel = model<UserDocument>('User', userSchema);
