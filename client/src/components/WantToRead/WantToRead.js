import React from "react";
import BookBoxWant from "../BookBox/BookBoxWant";

const WantToRead = (props) => {
  return(
    <article className="tile is-child notification is-info">
      <p className="title">
        <span className="icon is-small is-left">
          <i className="fa fa-lightbulb-o"></i>
        </span>
        <span className="tile-title">Want to Read</span>
      </p>
      <ul>
      {props.books.filter(book => {
        return book.dateCompleted === "1970-01-01T00:00:00.000Z";
      }).map( book => 
        <BookBoxWant 
          key={book._id}
          populateModalBook={props.populateModalBook}
          title={book.title}
          author={book.author}
          book={book}
        />
      )} 
      </ul>
    </article>
  );
}

export default WantToRead;