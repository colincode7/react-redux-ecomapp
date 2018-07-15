import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  cusId: { type: String, required: true },
  itemIds: { type: [Number], required: true },
});

export default mongoose.model('Cart', cartSchema);
