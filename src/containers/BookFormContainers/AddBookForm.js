import React from 'react';
import { connect } from 'react-redux';

import BookForm from '../../components/Books/BookForm';

const mapStateToProps = state => ({
  authors: state.authors
});

class AddBookFormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      book: {
        title: '',
        id: '',
        authorId: '',
        image: '',
        rating: 0,
        category: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, data) {
    const value = data.value || data.rating;
    const name = data.name;

    const book = { ...this.state.book };
    book[name] = value;

    this.setState({
      book
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.book);
  }

  render() {
    return (
      <BookForm
        book={this.state.book} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
        authors={this.props.authors}
      />
    );
  }
}

const AddBookForm = connect(mapStateToProps)(AddBookFormComponent);

export default AddBookForm;
