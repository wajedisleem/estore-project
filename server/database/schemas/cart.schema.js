import { Schema, model } from 'mongoose';

const cartSchema = new Schema(
  {
    cartId: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: 1
    }
  },
  {
    collection: 'cart',
    timestamps: true,
    versionKey: false
  }
);

const Cart = model('Cart', cartSchema);
export default Cart;
