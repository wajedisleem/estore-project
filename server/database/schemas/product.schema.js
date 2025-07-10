import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    en_name: {
      type: String,
      required: true
    },
    ar_name: {
      type: String,
      required: true
    },
    en_description: {
      type: String,
      required: true
    },
    ar_description: {
      type: String,
      required: true
    },
    en_category: {
      type: String,
      required: true
    },
    ar_category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      required: false,
      min: 0,
      max: 5
    },
    reviews: {
      type: Number,
      required: false,
      default: 0
    },
    offer: {
      type: Boolean,
      required: false,
      default: false
    },
    featured: {
      type: Boolean,
      required: false,
      default: false
    },
    new: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  {
    collection: 'product',
    versionKey: false
  }
);

const Product = model('Product', productSchema);
export default Product;
