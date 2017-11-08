import React, {Component} from 'react';
import UpdateForm from '../Form/UpdateForm';
import moment from 'moment';
import API from "../../utils/API";
// import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
// import _ from 'lodash';


// Title: This Book's Title  |E|
// Author: This Book's Author |E|
// Rating: This Book's Rating |E|

// When the user clicks |E|, change the text to an input field that holds the text. when enter is pushed, change the value of the state.

// have a flipper for each editable field. 
// so {!titleEditMode && {this.state.title}}
// and {titleEditMode && <input blah={blah}> </>}

class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: props.text,
      handleInputChange: props.handleInputChange,
      title: props.selectedBook.title,
      category: props.category,
      submit: props.submit,
      loadBooks: props.loadBooks,
      wantToRead: props.wantToRead,
      flipFavorite: props.flipFavorite,
      showModal: props.showModal,
      flipModal: props.flipModal,
      selectedBook: props.selectedBook,
      deleteBook: props.deleteBook,
      updateBook: props.updateBook,
      updateModalBook: props.updateModalBook,
      selectedTitle: props.selectedTitle,
      selectedAuthor: props.selectedAuthor,
      selectedNote: props.selectedNote,
      titleEditMode: false,
      authorEditMode: false,
      ratingEditMode: false,
      favoriteEditMode: false,
      noteEditMode: false,
      dateEditMode: false
    }
  }

  updateBook = (id, book) => {
        console.log("updateBook title is " + book.title + " BEFORE assignment");
        console.log("updateBook author is " + book.author + " BEFORE assignment");
        console.log("updateBook rating is " + book.rating + " BEFORE assignment");
        console.log("updateBook favorite is " + book.favorite + " BEFORE assignment");
        console.log("updateBook note is " + book.note + " BEFORE assignment");
        console.log("updateBook date is " + book.date + " BEFORE assignment");
        book.author = this.state.selectedAuthor
        book.title = this.state.selectedTitle
        book.rating = this.state.selectedRating
        book.favorite = this.state.favorite
        book.note = this.state.selectedNote
        book.date = this.state.date
        console.log("updateBook title is " + book.title + " AFTER assignment");
        console.log("updateBook author is " + book.author + " AFTER assignment");
        console.log("updateBook rating is " + book.rating + " AFTER assignment");
        console.log("updateBook favorite is " + book.favorite + " AFTER assignment");
        console.log("updateBook note is " + book.note + " AFTER assignment");
        console.log("updateBook date is " + book.date + " AFTER assignment");

        this.state.flipModal();
    
        API.updateBook(id, book)
        .then(res => this.state.loadBooks())
        .catch(err => console.log(err));
    
      }

  handleInputChange = event => {
    
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
   
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

          {/* Editable Fields */}

          <section className="modal-card-body">

            {/* Title Field */}

            <h1>
              <span className="bold-modal-title">Title:</span> 
              {
                this.state.titleEditMode
                  ? 
                    <form>
                      <input 
                        className="input" 
                        type="text" 
                        name="selectedTitle"
                        value={this.state.selectedTitle}
                        onChange={this.handleInputChange}
                      />
                    </form>
                  : this.state.selectedTitle
              }
              <button
                onClick={() => this.setState({titleEditMode:true})}
              >
                <span className="icon is-small is-left">
                  <i className="fa fa-pencil"></i>
                </span>
              </button>
            </h1>

            {/* Author Field */}

            <h1>
              <span className="bold-modal-title">Author:</span> 
              {
                this.state.authorEditMode
                  ? 
                    <form>
                      <input 
                        className="input" 
                        type="text" 
                        name="selectedAuthor"
                        value={this.state.selectedAuthor}
                        onChange={this.handleInputChange}
                      />
                    </form>
                  : this.state.selectedAuthor
              }
              <button
                onClick={() => this.setState({authorEditMode:true})}
              >
                <span className="icon is-small is-left">
                  <i className="fa fa-pencil"></i>
                </span>
              </button>
            </h1>

            {/* Favorite Field */}
           
            <h1>
              <span className="bold-modal-title">Favorite?</span> {this.state.selectedBook.favorite===true ? "Yes" : "No"}
            </h1>
            <h1>
              <span className="bold-modal-title">Rating:</span> 
              {this.state.selectedBook.rating}
            </h1>

            {/* Notes Field */}

            <h1>
              <span className="bold-modal-title">Notes:</span> 
              {
                this.state.noteEditMode
                  ? 
                    <form>
                      <textarea 
                        className="textarea" 
                        type="text" 
                        name="selectedNote"
                        value={this.state.selectedNote}
                        onChange={this.handleInputChange}
                      />
                    </form>
                  : this.state.selectedNote
              }
              <button
                onClick={() => this.setState({noteEditMode:true})}
              >
                <span className="icon is-small is-left">
                  <i className="fa fa-pencil"></i>
                </span>
              </button>
            </h1>

            {/* Date Field */}

            <h1>
              <span className="bold-modal-title">Date Added:</span> 
              {moment(this.state.selectedBook.dateCompleted).format("MMMM Do, YYYY")}
            </h1>
          </section>
          <footer className="modal-card-foot">
            <button 
              className="button is-success"
              onClick={(id, book) => this.updateBook(this.state.selectedBook.id, this.state.selectedBook)}
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

export default Modal;