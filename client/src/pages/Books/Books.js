import React, { Component } from "react";
import Form from "../../components/Form/Form";
import Profile from "../../components/Profile/Profile";
import Favorites from "../../components/Favorites/Favorites";
import WantToRead from "../../components/WantToRead/WantToRead";
import Completed from "../../components/Completed/Completed";
import API from "../../utils/API";
import Star from "../../components/BookBox/Star";
import Modal from "../../components/Modal/Modal";
import moment from 'moment';
import './Books.css';

class Books extends Component {

  // want a function that tallies up the number of completed books each time the page loads

  // componentDidMount
  // store the number in state
  // function could map through the books array, incrementing the booksCompleted for each book that is wantToRead=FALSE

  state = {
    books: [],
    user: [], 
    title: "",
    category: "",
    author: "",
    rating: 0,
    notes: "",
    favorite: false,
    wantToRead: false,
    date: new Date(),
    currentRatingArr: [],
    categorySwitch: "Choose Category",
    showModal: false,
    showAlert: false,
    booksCompleted: 0,
    selectedBook: {
      id: 0,
      title: "title",
      author: "author",
      category: "category",
      rating: 5,
      note: "notes go here",
      favorite: false,
      wantToRead: false,
      date: new Date()
    }
  };

  componentDidMount() {

    this.loadBooks();
    
  }

  componentDidUpdate() {

    if(this.state.category !== "Choose Category") {
      this.flipWantToRead();
    }

  }

  countCompleted = () => {
    console.log("books inside countCompleted is " + this.state.books[1]);
    let books = this.state.books;
    for (var book in books) {
      !books[book.wantToRead] && this.state.booksCompleted === this.state.booksCompleted + 1;
      console.log("for in ran once");
    }
    console.log("countCompleted ran and booksCompleted is " + this.state.booksCompleted)
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", categorySwitch: "Choose Category", rating:0, notes: "", favorite: false, wantToRead: false, date: new Date()})
       ).then(
          this.countCompleted()
      ).catch(err => console.log(err))

  };

  handleInputChange = event => {
 
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {

    event.preventDefault();

    if(this.state.category !== "Want to Read"){
      this.setState({date:Date.now()});
    }
    else if (!this.state.wantToRead && this.state.category !== "Want to Read"){
      this.setState({wantToRead: false})
    }
    else if (this.state.category === "Want to Read"){
      this.flipWantToRead();
    }
    
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      rating: this.state.rating,
      note: this.state.notes,
      favorite: this.state.favorite,
      dateCompleted: this.state.date,
      wantToRead: this.state.wantToRead
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));

  };

  flipFavorite = e => {

    e.preventDefault()

    this.state.favorite
      ? this.setState({favorite:false})
      : this.setState({favorite:true})
    
  }

  flipWantToRead = () => {

    if(this.state.category === "Want to Read"){
      if(this.state.wantToRead === false) {
        this.setState({wantToRead:true})
      }
    }
    else if (this.state.category === "Finished Reading"){
      if(this.state.wantToRead===true){
        this.setState({wantToRead: false})
      } 
    }

  }

  flipModal = () => {

    console.log("flipModal ran");
    if(this.state.showModal===false) {
      this.setState({showModal:true})
    }

    else {
      this.setState({showModal:false})
    }

  }

  flipAlert = () => {
    
    if(this.state.showAlert===false) {
      this.setState({showAlert:true})
    }

    else {
      this.setState({showAlert:false})
    }

  }

  populateModalBook = (bookToRender) => {

    console.log("populateModalBook ran")
    let selectedBook = {...this.state.selectedBook};

    selectedBook.id = bookToRender._id;
    selectedBook.title = bookToRender.title;
    selectedBook.author = bookToRender.author;
    selectedBook.category = bookToRender.category;
    selectedBook.rating = bookToRender.rating;
    selectedBook.favorite = bookToRender.favorite;
    selectedBook.note = bookToRender.note;
    selectedBook.date = bookToRender.dateCompleted;
    selectedBook.wantToRead = bookToRender.wantToRead;

    this.setState({selectedBook: selectedBook})
    this.flipModal();

  }

  flipCategorySwitch = event => {

    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
   
    this.setState({categorySwitch:value})

  }

  removeFavorite = (id, book) => {

console.log("remove favorite ran")
    if(book.favorite===true) {
      book.favorite = false;
      this.updateBook(id, book);
    }

  }

  populateStars = (rating) => {

    let ratingArray = [];

    for (let i = 0; i < rating; i++) {
      ratingArray.push(i);
    }

    return ratingArray.map(rating => {
        return <Star/>
    })

  }

  updateModalBook = (newState) => {
    
    this.setState(newState);
    
  };

  updateBook = (id, book) => {

    console.log("updateBook from books.js ran")

    API.updateBook(id, book)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));

  }

  deleteBook = id => {
    console.log("deleteBook ran");
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return(
      <section className="section">
        <div className="container is-fluid">
          {this.state.showModal && 
            <Modal 
                loadBooks={this.loadBooks}
                submit={this.handleFormSubmit}
                wantToRead={this.state.wantToRead}
                flipFavorite={this.flipFavorite}
                showModal={this.state.showModal}
                flipModal={this.flipModal}
                selectedBook={this.state.selectedBook}
                selectedTitle={this.state.selectedBook.title}
                selectedAuthor={this.state.selectedBook.author}
                selectedRating={this.state.selectedBook.rating}
                selectedFavorite={this.state.selectedBook.favorite}
                selectedNote={this.state.selectedBook.note}
                selectedDate={this.state.selectedBook.date}
                deleteBook={this.deleteBook}
                updateBook={this.updateBook}
                updateModalBook={this.updateModalBook}
                date={this.state.date}
            />
          }
          <div className="tile is-desktop is-ancestor">
            <div className="tile is-vertical">
              <div className="tile is-12">
                <div className="tile is-parent is-4">
                  <Profile 
                    date={this.state.date}
                    bookCount={this.state.books.length}
                  />
                </div> 
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title has-icons-left">
                      <span className="icon is-small is-left">
                        <i className="fa fa-book"></i>
                      </span>
                      <span className="tile-title">Add a Book</span>
                    </p>
                    <Form 
                      handleInputChange = {this.handleInputChange}
                      title = {this.state.title}
                      category= {this.state.category}
                      author= {this.state.author}
                      rating= {this.state.rating}
                      favorite={this.state.favorite}
                      submit= {this.handleFormSubmit}
                      date={this.state.date}
                      wantToRead={this.state.wantToRead}
                      flipFavorite= {this.flipFavorite}
                      flipCategorySwitch={this.flipCategorySwitch}
                      categorySwitch={this.state.categorySwitch}
                      notes={this.state.notes}
                    />
                  </article>
                </div>
              </div>
              <div className="tile is-12">
              <div className="tile is-parent is-4">
                <Favorites 
                  showModal={this.state.showModal}
                  populateModalBook={this.populateModalBook}
                  books={this.state.books}
                  removeFavorite={this.removeFavorite}
                  selectedBook={this.state.selectedBook}
                  populateStars={(rating) => this.populateStars(rating)}
                />
              </div>
              <div className="tile is-parent is-4">
                <Completed
                  showModal={this.state.showModal}
                  populateModalBook={this.populateModalBook}
                  books={this.state.books}
                  selectedBook={this.state.selectedBook}
                  //{function(rating){
                    //return this.populateStars(rating)
                  //}}
                  populateStars={(rating) => this.populateStars(rating)}
                />
              </div>
              <div className="tile is-parent is-4 max-me">
                <WantToRead 
                  books={this.state.books}
                  showModal={this.state.showModal}
                  populateModalBook={this.populateModalBook}
                  deleteBook={this.deleteBook}
                />
              </div>
            </div>
          </div>
          </div> {/* end tile is-ancestor */}
        </div>  {/* end container-is-fluid */}
      </section>

    );
  }
}

export default Books;