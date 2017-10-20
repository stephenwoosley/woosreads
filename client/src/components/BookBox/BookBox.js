import React from "react";
import './BookBox.css';

const BookBox = props =>
  <li>
    <div className="box">
      {/* <div className="level">
        <div className="level-item left-levels is-size-6"> */}
        {props.children}
        {/* </div> */}
        {/* <div className="level-item left-levels is-size-6">
          <i>J.R.R. Tolkein</i>
        </div> */}
      {/* </div> */}
      {/* <div className="level">
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
      </div> */}
    </div> 
  </li>

export default BookBox;