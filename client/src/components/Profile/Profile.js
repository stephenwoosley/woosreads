import React from "react";

const Profile = props =>
  <article className="tile is-child notification is-primary">
    <div className="level is-mobile is-vcentered top-of-profile">
      <div className="level-item has-text-centered">
        <div>
          <p className="name-title">Gabriella</p>
          <p className="name-title">Woosley</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <figure className="is-image is-128x128">
          <img className="g-image"src="http://res.cloudinary.com/stephenrwoosley/image/upload/v1511204020/g-mean_nk8a0p.png" alt="tough-g"></img>
        </figure>
      </div>
    </div>
    <div className="level is-mobile is-vcentered bottom-of-profile">
      <div className="level-item has-text-centered">
        <div className="has-text-centered books-read">
            <div className="books-read-number">
              <p className="heading">Books Read</p>
              <span className="tag title is-danger is-medium">
                {props.bookCount}
              </span>
            </div>         
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div className="has-text-centered books-read">
            <div className="books-read-number">
              <p className="heading">Reading Level</p>
              <span className="tag title is-danger is-medium">
                {props.bookCount < 10 
                  ? "Beginner" 
                  : props.bookCount < 25
                    ? "Level 1"
                    : "Level 2"
                }
              </span>
            </div>         
        </div>
      </div>
    </div>
  </article>

export default Profile;