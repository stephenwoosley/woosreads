import React from "react";
import BookBoxCompleted from "../BookBox/BookBoxCompleted";

const Completed = (props) => {
  return(
    <article className="tile is-child notification is-success">
      <div className="content scroll-this">
        <p className="title">
          <span className="icon is-small is-left">
            <i className="fa fa-check"></i>
          </span>
          <span className="tile-title">Completed</span>
        </p>
        <ul>
        {props.books.map(book => (
          <BookBoxCompleted
            key={book._id}
            populateModalBook={props.populateModalBook}
            populateStars={props.populateStars}
            selectedBook={props.selectedBook}
            book={book}
          />
        ))}
          {/* {children} */}
        </ul>
      </div>
    </article>
  );
}

export default Completed;