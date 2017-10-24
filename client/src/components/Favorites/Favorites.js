import React from "react";
import BookBox from "../BookBox/BookBox";

const Favorites = ({ children }) => {
  return(
    <article className="tile is-child notification is-warning">
      <div className="content">
        <p className="title">
          <span className="icon is-small is-left">
            <i className="fa fa-bookmark"></i>
          </span>
          <span className="tile-title">
            Favorites
          </span>
        </p>
        {/* <p className="subtitle">Top Books Here!</p> */}
        <ul>
          {children}
        </ul>
      </div>
    </article>
  );
}

export default Favorites;