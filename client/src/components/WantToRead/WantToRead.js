import React from "react";
import BookBox from "../BookBox/BookBox";

const WantToRead = ({ children }) => {
  return(
    <article className="tile is-child notification is-info">
      <p className="title">
        <span className="icon is-small is-left">
          <i className="fa fa-lightbulb-o"></i>
        </span>
        <span className="tile-title">Want to Read</span>
      </p>
      {/* <p className="subtitle">Someday Soon!</p> */}
      <ul>
        {children}
      </ul>
    </article>
  );
}

export default WantToRead;