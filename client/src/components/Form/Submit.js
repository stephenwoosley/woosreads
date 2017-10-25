import React from "react";

const Submit = props => {
  return (
      <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button 
                className="button is-primary"
                disabled={!(props.author && props.title && props.category)}
                onClick={props.submit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Submit;