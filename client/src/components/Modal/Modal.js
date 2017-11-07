import React from 'react';
import UpdateForm from '../Form/UpdateForm';
import moment from 'moment';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';


const Modal = props => {
  return(
    <div className="modal is-active">
      <div 
        className="modal-background"
        onClick={() => props.flipModal()}
      >
      </div>
      <div className="modal-card">
      
        <header className="modal-card-head">
          <p className="modal-card-title">Book Details</p>
          <button 
            className="delete" 
            aria-label="close"
            onClick={() => props.flipModal()}
          >
          </button>
        </header>
        <section className="modal-card-body">
          <h1>
            <span className="bold-modal-title">Title:</span> 
            {/* {props.selectedBook.title} */}
            {/* {console.log("selectedBook title is " + props.selectedBook.title)} */}
            <RIEInput
              value={props.selectedBook.title}
              change={props.updateModalBook}
              propName='title'
            />
          </h1>
          <h1>
            <span className="bold-modal-title">Author:</span> 
            {props.selectedBook.author}
          </h1>
          {/* <h1>Category: {props.selectedBook.category}</h1> */}
          <h1>
            <span className="bold-modal-title">Favorite?</span> {props.selectedBook.favorite===true ? "Yes" : "No"}
          </h1>
          {/* <h1>
            <span className="bold-modal-title">Want to Read?</span> {props.selectedBook.wantToRead}
          </h1> */}
          <h1>
            <span className="bold-modal-title">Rating:</span> 
            {props.selectedBook.rating}
          </h1>
          <h1>
            <span className="bold-modal-title">Notes:</span> 
            {props.selectedBook.note}
          </h1>
          <h1>
            <span className="bold-modal-title">Date Added:</span> 
            {moment(props.selectedBook.dateCompleted).format("MMMM Do, YYYY")}
          </h1>
        </section>
        <footer className="modal-card-foot">
          <button 
            className="button is-success"
          >
            Save changes
          </button>
          <button 
            className="button is-danger"
            //onClick={() => props.deleteBook(props.selectedBook.id)}
            onClick={() => {window.confirm('Are you sure you want to delete this book?') && props.deleteBook(props.selectedBook.id)}}
          >
            Delete
          </button>
        </footer> 
      </div>
    </div>
  );

}

export default Modal;