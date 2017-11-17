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

  loadBooks = () => {

    API.getBooks()
      // .then(res => console.log(res.data[0]))
      .then(res =>
        this.setState({ books: res.data, title: "", category: "Choose Category", categorySwitch: "Choose Category", author: "", rating:0, notes: "", favorite: false, wantToRead: false, date: new Date() })
      )
      .catch(err => console.log(err))

  };

  handleInputChange = event => {
 
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {

    event.preventDefault();
    console.log(this.state.category);
    console.log(this.state.date);

    if(this.state.category !== "Want to Read"){
      console.log("doesn't equal Want to Read!")
      this.setState({date:Date.now()})
    }
    else {
      console.log("does equal Want to Read!")
      console.log("wantToRead state at form submit is: " + this.state.wantToRead)
      this.flipWantToRead()
      console.log("wantToRead state at form submit is: " + this.state.wantToRead)
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

        console.log("BEFORE flipping in BOOKS.js/flipWantToRead: " + this.state.wantToRead)
        if(this.state.wantToRead === false) {
          this.setState({wantToRead:true})
        }
        console.log("AFTER flipping in BOOKS.js/flipWantToRead: " + this.state.wantToRead)
      }

  flipModal = () => {

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

    console.log(bookToRender)

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
    });

    this.setState({categorySwitch:value})

    this.flipWantToRead()

  }

  removeFavorite = (id, book) => {

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
    console.log("updatemomdalbook this.state.selectedBook.title is : " + this.state.selectedBook.title)
    
    
  };

  updateBook = (id, book) => {

    console.log("selectedBook state title is " + this.state.selectedBook.title);
    this.flipModal();
    console.log("updateBook has " + id + " as the id and " + book.title + " as the book title.")

    API.updateBook(id, book)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));

  }

  deleteBook = id => {
    console.log("book id inside deleteBook is " + id)
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
    this.flipModal();
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
                <div className="tile is-parent is-8">
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
                      flipWantToRead={this.state.flipWantToRead}
                    />
                  </article>
                </div>
              </div>
              <div className="tile is-parent is-12">
                <Favorites 
                  showModal={this.state.showModal}
                  populateModalBook={this.populateModalBook}
                  books={this.state.books}
                  removeFavorite={this.removeFavorite}
                  selectedBook={this.state.selectedBook}
                  populateStars={(rating) => this.populateStars(rating)}
                />
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
                <WantToRead 
                  books={this.state.books}
                  showModal={this.state.showModal}
                  populateModalBook={this.populateModalBook}
                  deleteBook={this.deleteBook}
                />
            </div>
          </div>
          </div> {/* end tile is-ancestor */}
        </div>  {/* end container-is-fluid */}
      </section>

    );
  }
}

export default Books;