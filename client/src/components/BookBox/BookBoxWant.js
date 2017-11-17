import React from "react";
import './BookBox.css';

const BookBoxWant = props =>

  <li>
    <div className="deleteContainer">
      <button 
        className="delete is-small"
        onClick={() => {window.confirm('Are you sure you want to delete this book?') && props.deleteBook(props.book._id)}}
      >
      </button>
        <div 
          className="box"
          onClick={() => props.populateModalBook(props.book)}
        >
          <span className="icon is-small is-left">
            <i className="fa fa-book"></i>
          </span>
          <span className="bookbox-title">
            <strong>{props.title}</strong>
          </span>
          <div>
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            <span className="bookbox-title">
              <i>{props.author}</i>
            </span>
          </div>
      </div>
    </div>
  </li>

export default BookBoxWant;