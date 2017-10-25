import React, { Component } from "react";
import Form from "../../components/Form/Form";
import BookBox from "../../components/BookBox/BookBox";
import Profile from "../../components/Profile/Profile";
import Favorites from "../../components/Favorites/Favorites";
import WantToRead from "../../components/WantToRead/WantToRead";
import Completed from "../../components/Completed/Completed";
import API from "../../utils/API";
import Star from "../../components/BookBox/Star";
import moment from "moment";
import './Books.css';

class Books extends Component {

  toBeDangerouslyReturned = () => {
    return {__html: '<hr></hr>\n'};
  }

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
    categorySwitch: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  populateStars = (rating) => {
    let ratingArray = []
    for (let i = 0; i < rating; i++) {
      ratingArray.push(i);
    }
    console.log(`rating array is ${ratingArray.length} items long.`)
    return ratingArray.map(rating => {
        return <Star/>
    })
  }
 

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
    {this.state.favorite
      ? this.setState({favorite:false})
      : this.setState({favorite:true})
    }
  }

  flipCategorySwitch = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    if(this.state.category == "") {
      this.setState({categorySwitch:"Want to Read"})
    }
    else if(this.state.category == "Want to Read") {
      this.setState({categorySwitch:"Finished Reading"})
    }
    else if(this.state.category == "Finished Reading") {
      this.setState({categorySwitch:"Want to Read"})
    }
    // {this.state.category=="Want to Read" && this.setState({categorySwitch:"Finished Reading"})
    // }
    // {this.state.category=="Finished Reading" && this.setState({categorySwitch:"Want to Read"})
    // }
  }
  
  componentDidMount() {
    this.loadBooks();
  }

  removeFavorite = (id, book) => {
    console.log("clicked and id is " + id)
    console.log("book favorite inside removeFAv func is " + book.favorite)
    book.favorite ? book.favorite = false : book.favorite = true;
    console.log("book favorite is now "+ book.favorite)
    this.updateBookFavorite(id, book);
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

  updateBook = (id) => {
    console.log("bookFavorite inside React updateBook func = ")
    API.updateBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  updateBookFavorite = (id, book) => {
    console.log("book object's fav prop inside React updateBookFavorite func = " + book.favorite)
    API.updateBookFavorite(id, book)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return(
      <section className="section">
        <div className="container is-fluid">
          <div className="tile is-desktop is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <Profile 
                    date={this.state.date}
                    bookCount={this.state.books.length}
                  />
                  <Favorites>
                    {this.state.books.filter(book => {
                        return book.favorite;
                      }).map( book => 
                        <BookBox key={book._id}>
                          <div className="deleteContainer">
                            <span className="icon is-small is-left">
                              <i className="fa fa-book"></i>
                            </span>
                            <span className="bookbox-title">
                              <strong>{book.title}</strong>
                            </span>
                            <a 
                              className="un-bookmark is-small"
                              onClick={() => this.removeFavorite(book._id, book)}
                            >
                            <span className="un-bookmark-span icon is-small is-left">
                              <i className="fa fa-bookmark"></i>
                            </span>
                            </a>
                          </div>
                          <div>
                            <span className="icon is-small is-left">
                              <i className="fa fa-user"></i>
                            </span>
                            <span className="bookbox-title">
                              <i>{book.author}</i>
                            </span>
                          </div>
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item has-text-centered is-size-7">
                                <div>
                                  {this.populateStars(book.rating)}
                                </div>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item has-text-centered is-size-7">
                                <div>
                                  <span>{moment(book.dateCompleted).format("MM.DD.YY")}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </BookBox>
                      )}
                  </Favorites>
                </div>
                <div className="tile is-parent">
                  <WantToRead>
                      {this.state.books.filter(book => {
                          return book.wantToRead;
                      }).map( book => 
                        <BookBox key={book._id}>
                          <div className="deleteContainer">
                            <span className="icon is-small is-left">
                              <i className="fa fa-book"></i>
                            </span>
                            <span className="bookbox-title">
                              <strong>{book.title}</strong>
                            </span>
                            <button className="delete is-small"></button>
                          </div>
                          <div>
                            <span className="icon is-small is-left">
                              <i className="fa fa-user"></i>
                            </span>
                            <span className="bookbox-title">
                              <i>{book.author}</i>
                            </span>
                          </div>
                        </BookBox>
                      )}
                  </WantToRead>
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
                    categorySwitch= {this.state.categorySwitch}
                    flipCategorySwitch={this.flipCategorySwitch}
                  />
                </article>
              </div>
            </div> 
            <div className="tile is-parent">
              <Completed>
                {this.state.books.map(book => (
                  <BookBox key={book._id}>
                    <div>
                      <span className="icon is-small is-left">
                        <i className="fa fa-book"></i>
                      </span>
                      <span className="bookbox-title">
                        <strong>{book.title}</strong>
                      </span>
                    </div>
                    <div>
                      <span className="icon is-small is-left">
                        <i className="fa fa-user"></i>
                      </span>
                      <span className="bookbox-title">
                        <i>{book.author}</i>
                      </span>
                    </div>
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item has-text-centered is-size-7">
                          <div>
                            {this.populateStars(book.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item has-text-centered is-size-7">
                          <div>
                            <span>{moment(book.dateCompleted).format("MM.DD.YY")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BookBox>
                ))}
              </Completed>
            </div>{ /* end tile is-parent */}
          </div> {/* end tile is-ancestor */}
        </div>  {/* end container-is-fluid */}
      </section>

    );
  }
}

export default Books;