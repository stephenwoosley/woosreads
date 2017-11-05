import React from "react";
import moment from "moment";
import './BookBox.css';

const BookBoxFavorite = props =>
  
  <li
    onClick={() => props.populateModalBook(props.book)}
  >
    <div className="box">
        <div className="deleteContainer">
          <span className="icon is-small is-left">
            <i className="fa fa-book"></i>
          </span>
          <span className="bookbox-title">
            <strong>{props.title}</strong>
          </span>
          <a 
            className="un-bookmark is-small"
            onClick={(id, book) => props.removeFavorite(props.book._id, props.book)}
          >
            <span className="un-bookmark-span icon is-small is-left">
              <i className="fa fa-bookmark"></i>
            </span>
          </a>
        </div>
        <div>
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          <span className="bookbox-title">
            <i>{props.author}</i>
          </span>
        </div>
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item has-text-centered is-size-7">
              <div>
                {this.populateStars}
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-centered is-size-7">
              <div>
                <span>{moment(props.dateCompleted).format("MM.DD.YY")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </li>

export default BookBoxFavorite;