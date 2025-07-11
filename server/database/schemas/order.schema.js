import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    sub_total: {
      type: Number,
      required: true
    },
    shipping: {
      type: Number,
      required: true,
      default: 0
    },
    tax: {
      type: Number,
      required: true,
      default: 0
    },
    total_amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending'
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],
    orderDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'order',
    timestamps: true,
    versionKey: false
  }
);

const Order = model('Order', orderSchema);
export default Order;
