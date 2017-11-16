import React from "react";
import Favorite from "./Favorite";
import Notes from "./Notes";
import Rating from "./Rating";
import Submit from "./Submit";
import "./Form.css";

const Form = props =>
    <form>

      {/* Title Field */}
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

      {/* Author Field */}
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

      {/* Category Field */}
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
                  onChange={props.flipCategorySwitch}
                  name="category"
                >
                  <option value="Choose Category">Choose Category</option>
                  <option value="Finished Reading">Finished Reading</option>
                  <option value="Want to Read">Want to Read</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Fields */}  

      { (() => {

        if(props.categorySwitch === "Choose Category"){

          return  <Submit />;

        }
        else if (props.categorySwitch === "Finished Reading") {

          return  <div>
                    <Rating 
                      rating={props.rating}
                      handleInputChange={props.handleInputChange}
                    />
                    <Favorite 
                      favorite={props.favorite}
                      handleInputChange={props.handleInputChange}
                      flipFavorite={props.flipFavorite}
                    />
                    <Notes 
                      notes={props.notes}
                      handleInputChange={props.handleInputChange}
                    />
                    <Submit 
                      author={props.author}
                      title={props.title}
                      category={props.category}
                      submit={props.submit}
                    />
                  </div>;

        }
        else {  
          return  <Submit 
                    author={props.author}
                    title={props.title}
                    category={props.category}
                    wantToRead={props.wantToRead}
                    submit={props.submit}
                  />;
          
        }
        })()
      }
    </form>

export default Form;
