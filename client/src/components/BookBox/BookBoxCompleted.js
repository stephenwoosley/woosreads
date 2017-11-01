import React from "react";
import moment from "moment";
import './BookBox.css';

const BookBoxCompleted = props =>
  <li>
    <div className="box">
        {/* {props.children} */}
        <div>
              <div>
                <span className="icon is-small is-left">
                  <i className="fa fa-book"></i>
                </span>
                <span className="bookbox-title">
                  <strong>{props.title}</strong>
                </span>
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
                      {props.populateStars(props.rating)}
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

export default BookBoxCompleted;