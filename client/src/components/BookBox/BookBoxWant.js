import React from "react";
import './BookBox.css';

const BookBoxCompleted = props =>

  <li>
    <div className="box">
        <div className="deleteContainer">
          <span className="icon is-small is-left">
            <i className="fa fa-book"></i>
          </span>
          <span className="bookbox-title">
            <strong>{props.title}</strong>
          </span>
          <button className="delete is-small"></button>
        </div>
        <div>
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          <span className="bookbox-title">
            <i>{props.author}</i>
          </span>
        </div>
      </div>
  </li>

export default BookBoxCompleted;