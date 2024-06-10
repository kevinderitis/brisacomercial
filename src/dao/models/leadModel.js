import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  threadId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  chatId: {
    type: String,
    unique: true,
  },
  payment: {
    type: Boolean,
    default: false
  },
  paymentDate: {
    type: Date
  },
  status: {
    type: String,
    default: 'active'
  }
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
