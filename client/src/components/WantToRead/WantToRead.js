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
      {props.books.map(book => (
          <BookBoxWant
            key={book._id}
            showModal={props.showModal}
            flipModal={props.flipModal}
            onClick={props.flipModal}
            populateStars={props.populateStars}
            title={book.title}
            author={book.author}
            completed={book.completed}
            notes={book.notes}
            rating={book.rating}
          />
        ))}
      </ul>
    </article>
  );
}

export default WantToRead;