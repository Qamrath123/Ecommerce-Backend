
//Product model 
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  category : {

    type:String,
    required: true,
    enum: ['jewelry', 'pottery', 'textiles', 'woodwork', 'other'], 
  },
  }
, 
{
  timestamps: true,
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
