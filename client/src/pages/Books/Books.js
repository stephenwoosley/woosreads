import React, { Component } from "react";
import FormTile from "../../components/Form/FormTile";
import BookBox from "../../components/BookBox/BookBox";
import Profile from "../../components/Profile/Profile";
import Favorites from "../../components/Favorites/Favorites";
import WantToRead from "../../components/WantToRead/WantToRead";
import Completed from "../../components/Completed/Completed";
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
                  <Profile />
                  <Favorites />
                </div>
                <div className="tile is-parent">
                  <WantToRead />
                </div>
              </div>
              <div className="tile is-parent">
                <FormTile />
              </div>
            </div>
            <div className="tile is-parent">
              <Completed />
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Books;