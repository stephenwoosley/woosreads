import React, { Component } from "react";
import Form from "../../components/Form/Form";
import Profile from "../../components/Profile/Profile";
import Favorites from "../../components/Favorites/Favorites";
import WantToRead from "../../components/WantToRead/WantToRead";
import Completed from "../../components/Completed/Completed";
import API from "../../utils/API";
import Star from "../../components/BookBox/Star";
import Modal from "../../components/Modal/Modal";
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
    date: Date.now(),
    currentRatingArr: [],
    categorySwitch: "",
    showExtraFields: false,
    showModal: false
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      // .then(res => console.log(res.data[0]))
      .then(res =>
        this.setState({ books: res.data, title: "", category: "", author: "", rating:0, notes: "", favorite: false })
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
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      rating: this.state.rating,
      note: this.state.notes,
      favorite: this.state.favorite,
      dateCompleted: this.state.date
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

  flipModal = e => {
    e.preventDefault()
    // console.log("flipping click working in flipModal")
    {!this.state.showModal && this.setState({showModal:true})}
  }


  flipCategorySwitch = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  removeFavorite = (id, book) => {
    // console.log("removeFavorite ID = " + id)
    // console.log("removeFavorite Book.Favorite = " + book.favorite)
    if(book.favorite===true) {
      book.favorite = false;
      // console.log("removeFavorite Book.Favorite after if statement = "+ book.favorite)
      this.updateBook(id, book);
    }
  }

  populateStars = (rating) => {
    let ratingArray = []
    for (let i = 0; i < rating; i++) {
      ratingArray.push(i);
    }
    // console.log(`rating array is ${ratingArray.length} items long.`)
    return ratingArray.map(rating => {
        return <Star/>
    })
  }

  updateBook = (id, book) => {
    console.log("updateBook's bookFavorite is "+ book.favorite)
    API.updateBook(id, book)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  // updateBookFavorite = (id, book) => {
  //   console.log("book object's fav prop inside React updateBookFavorite func = " + book.favorite)
  //   API.updateBook(id, book)
  //   // .then(res => this.loadBooks())
  //   .catch(err => console.log(err));
  // }

  deleteBook = id => {
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
              handleInputChange = {this.handleInputChange}
              title = {this.state.title}
              category= {this.state.category}
              author= {this.state.author}
              rating= {this.state.rating}
              submit= {this.handleFormSubmit}
              wantToRead={this.state.wantToRead}
              flipFavorite= {this.flipFavorite}
            />
          }
          
          <div className="tile is-desktop is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <Profile 
                    date={this.state.date}
                    bookCount={this.state.books.length}
                  />
                  <Favorites 
                    showModal={this.state.showModal}
                    flipModal={this.flipModal}
                    books={this.state.books}
                    populateStars={(rating) => this.populateStars(rating)}
                    removeFavorite={this.removeFavorite}
                  />
                </div>
                <div className="tile is-parent">
                  <WantToRead 
                    books={this.state.books}
                    showModal={this.state.showModal}
                    flipModal={this.flipModal}
                  />
                </div>
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
                    submit= {this.handleFormSubmit}
                    wantToRead={this.state.wantToRead}
                    flipFavorite= {this.flipFavorite}
                    showExtraFields={this.state.showExtraFields}
                  />
                </article>
              </div>
            </div> 
            <div className="tile is-parent">
              <Completed
                showModal={this.state.showModal}
                flipModal={this.flipModal}
                books={this.state.books}
                //{function(rating){
                  //return this.populateStars(rating)
                //}}
                populateStars={(rating) => this.populateStars(rating)}
              />
            </div>{ /* end tile is-parent */}
          </div> {/* end tile is-ancestor */}
        </div>  {/* end container-is-fluid */}
      </section>

    );
  }
}

export default Books;