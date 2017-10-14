import React, { Component } from "react";
import FormTile from "../../components/Form/FormTile";
import BookBox from "../../components/BookBox/BookBox";
import Profile from "../../components/Profile/Profile";
import Favorites from "../../components/Favorites/Favorites";
import WantToRead from "../../components/WantToRead/WantToRead";
import Completed from "../../components/Completed/Completed";
import API from "../../utils/API";
import './Books.css';

class Books extends Component {

  state = {
    books: [],
    user: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      // .then(res => console.log(res.data[0]))
      .then(res =>
        this.setState({ books: res.data })
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
                  <Profile />
                  <Favorites>
                    {this.state.books.filter(book => {
                        console.log(book.favorite)
                        return book.favorite;
                      }).map( book => 
                        <BookBox key={book._id}>
                          {book.title} by {book.author}
                        </BookBox>
                      )}
                  </Favorites>
                </div>
                <div className="tile is-parent">
                  <WantToRead />
                </div>
              </div>
              <div className="tile is-parent">
                <FormTile />
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
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Books;