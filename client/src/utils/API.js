import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  updateBook: function(id, book) {
    console.log("API got " + book.favorite + " as the favorite and " + id + " as the id");
    return axios.put("/api/books/" + id, book);
  },
  updateBookFavorite: function(id, body) {
    return axios.put("/api/books/" + id, body);
  }
};
