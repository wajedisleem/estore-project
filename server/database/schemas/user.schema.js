import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    }
  },
  {
    collection: 'user',
    timestamps: true,
    versionKey: false,
  }
);

const User = model('User', userSchema);
export default User;
