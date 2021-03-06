const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number },
  note: { type: String },
  favorite: { type: Boolean },
  wantToRead: {type: Boolean},
  dateCompleted: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;