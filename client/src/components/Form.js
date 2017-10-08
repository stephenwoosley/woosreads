import React from "react";
import './Form.css';

const Form = () =>

  <form>
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label has-text-white">Title</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input className="input" type="text" placeholder="Book Title"></input>
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
            <input className="input" type="text" placeholder="Name"></input>
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
              <select>
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
          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
            <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
            <input type="radio" id="star4" name="rating" value="4" /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
            <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
            <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
            <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
            <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
            <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
            <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
            <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
          </fieldset>
        </div>
      </div>
    </div>
    <br></br>

    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label has-text-white is-paddingless">Comments</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="What were your favorite parts of the book?"></textarea>
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
            <button className="button is-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>

export default Form;
