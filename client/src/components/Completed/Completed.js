import React from "react";
import BookBox from "../BookBox/BookBox";

const Completed = () =>
  <article className="tile is-child notification is-success">
    <div className="content">
      <p className="title">
        <span className="tile-title">Completed</span>
        <span className="icon is-small is-left">
          <i className="fa fa-check"></i>
        </span>
      </p>
      <p className="subtitle">Look How Many You've Read!</p>
      <BookBox />
      <BookBox />
      <BookBox />
      <BookBox />
      <BookBox />
    </div>
  </article>

  export default Completed;