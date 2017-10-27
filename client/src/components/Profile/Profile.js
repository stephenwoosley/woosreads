import React from "react";

const Profile = props =>
  <article className="tile is-child notification is-primary">
    <div className="columns is-mobile is-vcentered">
      <div className="column is-half">
        <figure className="is-image is-128x128">
          <img className="g-image"src="http://res.cloudinary.com/stephenrwoosley/image/upload/c_crop,g_face,h_3024,w_2136,x_0,y_0/v1508855448/IMG_3224_a0haht.jpg"></img>
        </figure>
        
          {/* <span className="icon is-small is-left">
            <i className="fa fa-flash"></i>
          </span> */}
          {/* <span className="tile-title">Gabriella Woosley</span> */}
        {/* <p className="subtitle">reading wizard</p> */}
      </div>
      <div className="column">
          <div className="has-text-centered books-read">
            <p className="title name-title is-size-4-desktop is-size-4-widescreen is-size-5-mobile">Gabriella Woosley</p>
            <div className="finished-books">
              <div className="is-size-5-desktop is-size-7-mobile books-read-title">
                Has finished
              </div>
              <div className="books-read-number">
                <span className="tag is-danger is-medium">
                  {props.bookCount}
                </span>
              </div>
              <div className="is-size-5-desktop is-size-7-mobile is-size-5-widescreen books-read-title">
                books since 10/31/17.
              </div>
            </div>
            
            {/* <p>{moment(props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p> */}
          </div>
      </div>
    </div>
  </article>


export default Profile;