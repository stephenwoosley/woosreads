import React from "react";
import BookBoxCompleted from "../BookBox/BookBoxCompleted";

const Completed = (props) => {
  return(
    <article className="tile is-child notification is-success">
      <div className="content">
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
            showModal={props.showModal}
            flipModal={props.flipModal}
            //onClick={() => props.flipModal()}
            populateStars={props.populateStars}
            title={book.title}
            author={book.author}
            completed={book.completed}
            notes={book.notes}
            rating={book.rating}
          />
        ))}
          {/* {children} */}
        </ul>
      </div>
    </article>
  );
}

export default Completed;