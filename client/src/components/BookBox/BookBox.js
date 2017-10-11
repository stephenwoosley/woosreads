import React from "react";
import './BookBox.css';

const BookBox = () =>
  <div className="box">
    <div className="level">
      <div className="level-item left-levels is-size-6">
        <strong>The Hobbit</strong>
      </div>
      <div className="level-item left-levels is-size-6">
        <i>J.R.R. Tolkein</i>
      </div>
    </div>
    <div className="level">
      <div className="level-item has-text-centered is-size-7">
        <span className="icon is-small is-left">
          <i className="fa fa-star"></i>
        </span>
        <span className="icon is-small is-left">
          <i className="fa fa-star"></i>
        </span>
        <span className="icon is-small is-left">
          <i className="fa fa-star"></i>
        </span>
        <span className="icon is-small is-left">
          <i className="fa fa-star"></i>
        </span>
        <span className="icon is-small is-left">
          <i className="fa fa-star"></i>
        </span>
      </div>
    </div>
  </div> 

export default BookBox;