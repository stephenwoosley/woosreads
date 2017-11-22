import React, {Component} from 'react';
import UpdateForm from '../Form/UpdateForm';
import moment from 'moment';
import API from "../../utils/API";
import DatePicker from 'react-date-picker'

// initial state of DATE in books.js = now

// held date inside each bookbox = date entered

// when opening a BOOKBOX, grab that date and display it in the modal DATE field

// when dateEditMode is active, show DATEPICKER with bookbox's date shown

// link DATEPICKER value with state of BOOKBOX's date


class Modal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: props.date,
      title: props.selectedBook.title,
      category: props.category,
      submit: props.submit,
      loadBooks: props.loadBooks,
      wantToRead: props.wantToRead,
      flipFavorite: props.flipFavorite,
      showModal: props.showModal,
      flipModal: props.flipModal,
      selectedBook: props.selectedBook,
      // deleteBook: props.deleteBook,
      // updateBook: props.updateBook,
      updateModalBook: props.updateModalBook,
      selectedTitle: props.selectedTitle,
      selectedAuthor: props.selectedAuthor,
      selectedNote: props.selectedNote,
      selectedFavorite: props.selectedFavorite,
      selectedDate: props.selectedDate,
      titleEditMode: false,
      authorEditMode: false,
      ratingEditMode: false,
      favoriteEditMode: false,
      noteEditMode: false,
      dateEditMode: false
    }
  }

  updateBook = (id, book) => {

      console.log("update book from modal.js ran")

        console.log("updateBook title is " + book.title + " BEFORE assignment");
        console.log("updateBook author is " + book.author + " BEFORE assignment");
        console.log("updateBook rating is " + book.rating + " BEFORE assignment");
        console.log("updateBook favorite is " + book.favorite + " BEFORE assignment");
        console.log("updateBook note is " + book.note + " BEFORE assignment");
        console.log("updateBook date is " + book.date + " BEFORE assignment");
        book.author = this.state.selectedAuthor
        book.title = this.state.selectedTitle
        book.rating = this.state.selectedRating
        book.favorite = this.state.selectedFavorite
        book.note = this.state.selectedNote
        book.date = this.state.selectedDate
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

  deleteBook = id => {
    console.log("deleteBook inside modal.js ran");
    API.deleteBook(id)
      .then(res => this.state.loadBooks())
      .catch(err => console.log(err));
    this.state.flipModal();
  };

  handleInputChange = event => {

    console.log("handleInputChange triggered")
    
    const { name, value } = event.target;
    if(typeof value === 'string'){
      value === "yes" && value === true;
      this.setState({
        [name]: value
      });
    }
    else {
      this.setState({
        [name]: value
      });
    }
  };

  onChange = value => {
    console.log('value is ' + value)
    this.setState({ selectedDate: value })
  }
  
  

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
            
            {/* Date Field */}

            <h1>
              <span className="bold-modal-title">Date Added:</span> 
              {moment(this.state.selectedDate).format("MMMM Do, YYYY")}
              {/* {
                this.state.dateEditMode
                  ?
                  <DatePicker
                      value={this.state.date}
                      name="date"
                      onChange={this.onChange}
                      className="input"
                  />
                  : moment(this.state.selectedDate).format("MMMM Do, YYYY")
              }
              <button
                onClick={() => this.setState({dateEditMode:true})}
              >
                <span className="icon is-small is-left">
                  <i className="fa fa-pencil"></i>
                </span>
              </button> */}
            </h1>

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
                        onChange={this.onChange}
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
              <span className="bold-modal-title">Favorite?</span>
              
              {/* {this.state.selectedBook.favorite===true ? "Yes" : "No"} */}
              {
                this.state.favoriteEditMode
                  ? 
                    <form>
                      <select 
                        className="select"
                        name="selectedFavorite"
                        value={this.state.selectedFavorite}
                        onChange={this.handleInputChange}
                      >
                        <option value="Choose One">Choose One</option>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                      </select>
                    </form>
                  : this.state.selectedBook.favorite===true ? "Yes" : "No"
              }
              <button
                onClick={() => this.setState({favoriteEditMode:true})}
              >
                <span className="icon is-small is-left">
                  <i className="fa fa-pencil"></i>
                </span>
              </button>
            </h1>

            {/* Rating Field */}

            <h1>
              <span className="bold-modal-title">Rating:</span> 
              {
                this.state.ratingEditMode
                  ? 
                    <form>
                      <select 
                        className="select"
                        name="selectedRating"
                        value={this.state.selectedRating}
                        onChange={this.handleInputChange}
                      >
                        <option value="Choose One">Choose One</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </form>
                  : this.state.selectedBook.rating
              }
              <button
                onClick={() => this.setState({ratingEditMode:true})}
              >
                <span className="icon is-small is-left">
                  <i className="fa fa-pencil"></i>
                </span>
              </button>
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

            
          </section>

          {/* Footer */}

          <footer className="modal-card-foot">
            <button 
              className="button is-success"
              onClick={(id, book) => this.updateBook(this.state.selectedBook.id, this.state.selectedBook)}
            >
              Save changes
            </button>
            <button 
              className="button is-danger"
              onClick={() => {window.confirm('Are you sure you want to delete this book?') && this.deleteBook(this.state.selectedBook.id)}}
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