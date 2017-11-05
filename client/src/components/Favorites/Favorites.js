import React from "react";
import BookBoxFavorite from "../BookBox/BookBoxFavorite";

const Favorites = (props) => {
  return(
    <article className="tile is-child notification is-warning">
      <div className="content">
        <p className="title">
          <span className="icon is-small is-left">
            <i className="fa fa-bookmark"></i>
          </span>
          <span className="tile-title">
            Favorites
          </span>
        </p>
        <ul>
          {props.books.filter(book => {
            return book.favorite;
          }).map( book => 
            <BookBoxFavorite 
              key={book._id}
              populateModalBook={props.populateModalBook}
              populateStars={props.populateStars}
              book={book}
              selectedBook={props.selectedBook}
              removeFavorite={props.removeFavorite}
            />
          )} 
        </ul>
      </div>
    </article>
  );
}

export default Favorites;