import React from "react";
import BookBoxWant from "../BookBox/BookBoxWant";

const WantToRead = (props) => {
  return(
    <div className="wunderbox">
      <article className="tile is-child notification is-info">
        <div className="content">
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
                deleteBook={props.deleteBook}
                populateModalBook={props.populateModalBook}
                title={book.title}
                author={book.author}
                book={book}
              />
            )} 
          </ul>
        </div>
      </article>
    </div>
  );
}

export default WantToRead;