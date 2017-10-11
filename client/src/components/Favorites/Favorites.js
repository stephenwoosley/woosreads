import React from "react";
import BookBox from "../BookBox/BookBox"

const Favorites = () =>

<article className="tile is-child notification is-warning">
  <p className="title">
    <span className="icon is-small is-left">
      <i className="fa fa-bookmark"></i>
    </span> 
    <span className="tile-title">
      Favorites
    </span>
  </p>
  <p className="subtitle">Which Books Were the Best?</p>
  <BookBox />
  <BookBox />
  <BookBox />
</article>

export default Favorites;