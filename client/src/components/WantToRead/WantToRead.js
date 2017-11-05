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
        return book.wantToRead;
      }).map( book => 
        <BookBoxWant 
          key={book._id}
          populateModalBook={props.populateModalBook}
          title={book.title}
          author={book.author}
          completed={book.completed}
          notes={book.notes}
          rating={book.rating}
          book={book}
        />
      )} 
      </ul>
    </article>
  );
}

export default WantToRead;