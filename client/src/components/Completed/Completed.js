import React, { Component } from "react";
import BookBox from "../BookBox/BookBox";

const Completed = ({ children }) => {
  return(
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">
          <span className="icon is-small is-left">
            <i className="fa fa-check"></i>
          </span>
          <span className="tile-title">Completed</span>
        </p>
        {/* <p className="subtitle">Look How Many You've Read!</p> */}
        <ul>
          {children}
        </ul>
      </div>
    </article>
  );
  
}

export default Completed;