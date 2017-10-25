import React from "react";

const Rating = props => {
 return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Rating</label>
        </div>
        <div className="field-body">
          <div className="field has-addons has-addons-left">
            <fieldset 
              className="rating" 
              name="rating"
              value={props.rating}
              onChange={props.handleInputChange}
            >
              <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome!"></label>
              {/* <input type="radio" id="star4half" name="rating" value="4.5" /><label className="half" htmlFor="star4half" title="Great!"></label> */}
              <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty Good!"></label>
              {/* <input type="radio" id="star3half" name="rating" value="3.5" /><label className="half" htmlFor="star3half" title="It Was Decent."></label> */}
              <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="It Was OK."></label>
              {/* <input type="radio" id="star2half" name="rating" value="2.5" /><label className="half" htmlFor="star2half" title="Not Great."></label> */}
              <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda Bad."></label>
              {/* <input type="radio" id="star1half" name="rating" value="1.5" /><label className="half" htmlFor="star1half" title="Not Good."></label> */}
              <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Not Good At All."></label>
              {/* <input type="radio" id="starhalf" name="rating" value="0.5" /><label className="half" htmlFor="starhalf" title="Very Bad!"></label> */}
            </fieldset>
          </div>
        </div>
      </div>
  );
}

export default Rating;