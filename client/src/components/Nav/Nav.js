import React from "react";
import './Nav.css';

const Nav = () => 
  <nav className="navbar is-danger" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="http://bulma.io">
        <strong className="is-size-5">woosreads</strong>
        <span className="icon is-small is-left bookmark">
          <i className="fa fa-bookmark"></i>
        </span>
      </a>
      
    </div>
  </nav>;


export default Nav;