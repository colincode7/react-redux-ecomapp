import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  cusId: { type: 'String', required: true },
  address: { type: 'String', required: true },
  payOption: { type: 'String', required: true },
  itemsList: { type: [Number], required: true},
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Order', orderSchema);
