import React from "react";
import Form from "./Form";
import "./Form.css";


const FormTile = () =>
  <article className="tile is-child notification is-danger">
    <p className="title has-icons-left">
      <span className="icon is-small is-left">
        <i className="fa fa-book"></i>
      </span>
      <span className="tile-title">Add a Book</span>
    </p>
    <p className="subtitle">What's New?</p>
    <Form />
    <div className="content">
    </div>
  </article>

export default FormTile;