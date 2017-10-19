import React from "react";

const Profile = () =>
  <article className="tile is-child notification is-primary">
    <div className="columns is-desktop is-vcentered">
      <div className="column is-two-thirds">
        <figure className="is-image is-128x128">
          <img className="g-image"src="http://res.cloudinary.com/stephenrwoosley/image/upload/v1507595613/g-tough_ztntg7.png"></img>
        </figure>
        <p className="title">Gabriella Woosley</p>
          {/* <span className="icon is-small is-left">
            <i className="fa fa-flash"></i>
          </span> */}
          {/* <span className="tile-title">Gabriella Woosley</span> */}
        <p className="subtitle">reading wizard</p>
      </div>
      <div className="column">
          <div className="has-text-centered books-read">
            <div className="is-size-4 books-read-title">
              <strong>Books Read:</strong>
            </div>
            <div className="books-read-number">
              <span className="tag is-danger is-large">
                80
              </span>
            </div>
          </div>
      </div>
    </div>
  </article>


export default Profile;