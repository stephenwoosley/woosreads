import React, { Component } from "react";
import Form from "../../components/Form";
import BookBox from "../../components/BookBox";
import './Books.css';

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
                    <p className="title">
                      <span className="tile-title">Gabriella Woosley</span>
                      <span className="icon is-small is-left">
                        <i className="fa fa-flash"></i>
                      </span>
                    </p>
                    <p className="subtitle">Reading Wizard</p>
                    <figure className="is-image is-128x128">
                      <img className="g-image"src="http://res.cloudinary.com/stephenrwoosley/image/upload/v1507595613/g-tough_ztntg7.png"></img>
                    </figure>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">
                      <span className="tile-title">
                        Favorites
                      </span>
                      <span className="icon is-small is-left">
                        <i className="fa fa-star"></i>
                      </span>  
                    </p>
                    <p className="subtitle">Which Books Were the Best?</p>
                    <BookBox />
                    <BookBox />
                    <BookBox />
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">
                      <span className="tile-title">Want to Read</span>
                      <span className="icon is-small is-left">
                        <i className="fa fa-lightbulb-o"></i>
                      </span>
                    </p>
                    <p className="subtitle">Someday Soon!</p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title has-icons-left">
                    <span className="tile-title">Add a Book</span>
                    <span className="icon is-small is-left">
                      <i className="fa fa-book"></i>
                    </span>
                  </p>
                  <p className="subtitle">What's New?</p>
                  <Form />
                  <div className="content">
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">
                    <span className="tile-title">Books Read</span>
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
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Books;