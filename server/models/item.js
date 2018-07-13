import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  img: { type: 'String', required: true },
  description: { type: 'String', required: true },
//  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Item', itemSchema);
