const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  user: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
  },
  notice: String,
  price: Number,
  categories: [String],
  year: { type: Number, default: new Date().getFullYear() },
  month: { type: Number, default: new Date().getMonth() },
  day: { type: Number, default: new Date().getDay() },
});

module.exports = mongoose.model("notices", noticeSchema);
