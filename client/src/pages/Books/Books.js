import React, { Component } from "react";
import Form from "../../components/Form/Form";
import BookBox from "../../components/BookBox/BookBox";
import Profile from "../../components/Profile/Profile";
import Favorites from "../../components/Favorites/Favorites";
import WantToRead from "../../components/WantToRead/WantToRead";
import Completed from "../../components/Completed/Completed";
import API from "../../utils/API";
import moment from "moment";
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
    date: Date.now()
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
    {this.state.favorite
      ? this.setState({favorite:false})
      : this.setState({favorite:true})
    }
  }
  

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

  render() {
    return(
      <section className="section">
        <div className="container is-fluid">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <Profile 
                    date={this.state.date}
                  />
                  <Favorites>
                    {this.state.books.filter(book => {
                        return book.favorite;
                      }).map( book => 
                        <BookBox key={book._id}>
                          {book.title} by {book.author}
                        </BookBox>
                      )}
                  </Favorites>
                </div>
                <div className="tile is-parent">
                  <WantToRead>
                      {this.state.books.filter(book => {
                          return !book.favorite;
                      }).map( book => 
                        <BookBox key={book._id}>
                          {book.title} by {book.author}
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
                  <p className="subtitle">
                    What's New?
                  </p>
           
                  <Form 
                    handleInputChange = {this.handleInputChange}
                    title = {this.state.title}
                    category= {this.state.category}
                    author= {this.state.author}
                    rating= {this.state.rating}
                    submit= {this.handleFormSubmit}
                    flipFavorite= {this.flipFavorite}
                  />
                </article>
                {/* <FormTile /> */}
              </div>
            </div> 
            <div className="tile is-parent">
              <Completed>
                {this.state.books.map(book => (
                  <BookBox key={book._id}>
                    {book.title} by {book.author}
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