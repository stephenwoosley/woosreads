import React from "react";

const Favorite = props => {
  return (
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label has-text-white">Favorite?</label>
          </div>
          <div className="field-body">
            <div className="field has-addons has-addons-left">
              <fieldset
                className="favorite" 
                name="favorite"
                value={props.favorite}
                onChange={props.handleInputChange}
                onClick={props.flipFavorite}
              >
                <input 
                  type="radio" 
                  id="bookmark" 
                  name="favorite" 
                />
                <label 
                  className = "favorite-bookmark full"
                  id = {props.favorite ? 'favorite-color': null}
                  htmlFor="bookmark" 
                  title="Bookmark Me!"
                />
              </fieldset>
            </div>
          </div>
        </div>
  );
}

export default Favorite;