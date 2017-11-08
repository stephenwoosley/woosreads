import React, {Component} from 'react';
import UpdateForm from '../Form/UpdateForm';
import moment from 'moment';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import _ from 'lodash';


// Title: This Book's Title  |E|
// Author: This Book's Author |E|
// Rating: This Book's Rating |E|

// When the user clicks |E|, change the text to an input field that holds the text. when enter is pushed, change the value of the state.

class Modal2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: props.text,
      handleInputChange: props.handleInputChange,
      title: props.selectedBook.title,
      category: props.category,
      author: props.author,
      rating: props.rating,
      submit: props.submit,
      wantToRead: props.wantToRead,
      flipFavorite: props.flipFavorite,
      showModal: props.showModal,
      flipModal: props.flipModal,
      selectedBook: props.selectedBook,
      notes: props.notes,
      deleteBook: props.deleteBook,
      updateBook: props.updateBook,
      updateModalBook: props.updateModalBook,
      selectedTitle: props.selectedTitle
    }
  }

  updateModalBook = (newState) => {
    console.log("newstate inside updateModalBook is "+ newState)
    this.setState(newState);
    this.props.updateModalBook(newState);
    
  };

  render() {
    return(
      <div className="modal is-active">
        <div 
          className="modal-background"
          onClick={() => this.state.flipModal()}
        >
        </div>
        <div className="modal-card">
        
          <header className="modal-card-head">
            <p className="modal-card-title">Book Details</p>
            <button 
              className="delete" 
              aria-label="close"
              onClick={() => this.state.flipModal()}
            >
            </button>
          </header>
          <section className="modal-card-body">
            <h1>
              <span className="bold-modal-title">Title:</span> 
              {/* {this.state.selectedBook.title} */}
              {/* {console.log("selectedBook title is " + this.state.selectedBook.title)} */}
              <RIEInput
                value={this.state.selectedTitle}
                change={this.updateModalBook}
                propName='selectedTitle'
              />
            </h1>
            <h1>
              <span className="bold-modal-title">Author:</span> 
              {this.state.selectedBook.author}
            </h1>
            {/* <h1>Category: {this.state.selectedBook.category}</h1> */}
            <h1>
              <span className="bold-modal-title">Favorite?</span> {this.state.selectedBook.favorite===true ? "Yes" : "No"}
            </h1>
            {/* <h1>
              <span className="bold-modal-title">Want to Read?</span> {this.state.selectedBook.wantToRead}
            </h1> */}
            <h1>
              <span className="bold-modal-title">Rating:</span> 
              {this.state.selectedBook.rating}
            </h1>
            <h1>
              <span className="bold-modal-title">Notes:</span> 
              {this.state.selectedBook.note}
            </h1>
            <h1>
              <span className="bold-modal-title">Date Added:</span> 
              {moment(this.state.selectedBook.dateCompleted).format("MMMM Do, YYYY")}
            </h1>
          </section>
          <footer className="modal-card-foot">
            <button 
              className="button is-success"
              onClick={(id, book) => this.props.updateBook(this.state.selectedBook.id, this.props.selectedBook)}
            >
              Save changes
            </button>
            <button 
              className="button is-danger"
              //onClick={() => this.state.deleteBook(this.state.selectedBook.id)}
              onClick={() => {window.confirm('Are you sure you want to delete this book?') && this.state.deleteBook(this.state.selectedBook.id)}}
            >
              Delete
            </button>
          </footer> 
        </div>
      </div>
    );

  }
  

}

export default Modal2;