import { Schema, model } from 'mongoose';

const cartProductSchema = new Schema(
  {
    cart: {
      type: Schema.Types.ObjectId,
      ref: 'Cart'
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
    collection: 'cart-product',
    versionKey: false
  }
);

const CartProduct = model('CartProduct', cartProductSchema);
export default CartProduct;
