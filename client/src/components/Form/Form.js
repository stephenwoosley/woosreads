import React from "react";
import "./Form.css";

const Form = props =>
    <form>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Title</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
            <input 
                className="input" 
                type="text" 
                placeholder="Name"
                name="title"
                value={props.title}
                onChange={props.handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-book"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Author</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input 
                className="input" 
                type="text" 
                placeholder="Name"
                name="author"
                value={props.author}
                onChange={props.handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Category</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={props.category}
                  onChange={props.handleInputChange}
                  name="category"
                >
                <option></option>
                  <option>Finished Reading</option>
                  <option>Want to Read</option>
                  <option>Favorite!</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Rating</label>
        </div>
        <div className="field-body">
          <div className="field">
            <fieldset 
              className="rating" 
              name="rating"
              value={props.rating}
              onChange={props.handleInputChange}
            >
              <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome!"></label>
              {/* <input type="radio" id="star4half" name="rating" value="4.5" /><label className="half" for="star4half" title="Great!"></label> */}
              <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Pretty Good!"></label>
              {/* <input type="radio" id="star3half" name="rating" value="3.5" /><label className="half" for="star3half" title="It Was Decent."></label> */}
              <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="It Was OK."></label>
              {/* <input type="radio" id="star2half" name="rating" value="2.5" /><label className="half" for="star2half" title="Not Great."></label> */}
              <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda Bad."></label>
              {/* <input type="radio" id="star1half" name="rating" value="1.5" /><label className="half" for="star1half" title="Not Good."></label> */}
              <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Not Good At All."></label>
              {/* <input type="radio" id="starhalf" name="rating" value="0.5" /><label className="half" for="starhalf" title="Very Bad!"></label> */}
            </fieldset>
          </div>
        </div>
      </div>
      <div className= "field is-horizontal">
      <div className="field-label is-normal">
          <label className="label has-text-white is-paddingless">Favorite?</label>
        </div>
        <div className="field-body">
          <div className="field">
            <fieldset
              className="favorite" 
              name="favorite"
              value={props.favorite}
              onChange={props.handleInputChange}
              onClick={props.flipFavorite}
            >
              <input type="radio" id="bookmark" name="favorite" /><label className = "favorite-bookmark" for="bookmark" title="Bookmark Me!"></label>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white is-paddingless">Notes</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea 
                className="textarea" 
                placeholder="What were your favorite parts of the book?"
                name="notes"
                value={props.notes}
                onChange={props.handleInputChange}
              >
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button 
                className="button is-primary"
                disabled={!(props.author && props.title && props.category && props.rating)}
                onClick={props.submit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

  

export default Form;
