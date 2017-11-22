import React from "react";

const Notes = props => {
  return (
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
  );
}

export default Notes;