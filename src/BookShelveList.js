import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelve from './BookShelve'
class BookShelveList extends Component {


    render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookShelve books={this.props.books.filter((book)=>book.shelf==="currentlyReading")} onChangeShelf={this.props.onChangeShelf} shelveType="currentlyReading"/>
                  <BookShelve books={this.props.books.filter((book)=>book.shelf==="wantToRead")} onChangeShelf={this.props.onChangeShelf} shelveType="wantToRead"/>
                  <BookShelve books={this.props.books.filter((book)=>book.shelf==="read")} onChangeShelf={this.props.onChangeShelf} shelveType="read"/>
                </div>
            </div>
                
                <div className="open-search">
                <Link to="/search">
                        Add a book </Link>
            
            </div>
            </div>
    )
    }
}

export default BookShelveList;