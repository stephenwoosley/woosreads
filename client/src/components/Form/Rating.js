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
              value={props.rating}
              onChange={props.handleInputChange}
            >
              <input 
                type="radio" 
                id="star5" 
                name="rating" 
                value={5}
              />
              <label 
                className="full" 
                htmlFor="star5" 
                title="Awesome!"
              />
            
              <input 
                type="radio" 
                id="star4" 
                name="rating" 
                value={4}
              />
              <label 
                className="full" 
                htmlFor="star4" 
                title="Pretty Good!"
              />
              
              <input 
                type="radio" 
                id="star3" 
                name="rating" 
                value={3}
              />
              <label 
                className="full" 
                htmlFor="star3" 
                title="It Was OK."
              />
              
              <input 
                type="radio" 
                id="star2" 
                name="rating" 
                value={2} 
              />
              <label 
                className="full" 
                htmlFor="star2" 
                title="Kinda Bad."
              />
              
              <input 
                type="radio" 
                id="star1" 
                name="rating" 
                value={1} 
              />
              <label 
                className="full" 
                htmlFor="star1" 
                title="Not Good At All."
              />
              
            </fieldset>
          </div>
        </div>
      </div>
  );
}

export default Rating;