import { Schema, model } from 'mongoose';

const cartSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    collection: 'cart',
    versionKey: false
  }
);

const Cart = model('Cart', cartSchema);
export default Cart;