import React, { Component } from "react";
import Form from "../../components/Form";

class Books extends Component {

  render() {
    return(
      <section className="section">
        <div className="container is-fluid">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title">Gabriella</p>
                    <figure className="is-image is-128x128">
                      <img src="http://bulma.io/images/placeholders/128x128.png"></img>
                    </figure>
                    <p className="subtitle">Photo, Personal Info</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">Favorites</p>
                    <p className="subtitle">List of Books</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Want to Read</p>
                    <p className="subtitle">List of Books</p>
                    <figure className="image is-4by3">
                      
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <Form />
                  <div className="content">
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Books Read</p>
                  <p className="subtitle">List of books we've already read</p>
                  <div className="content">
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Books;