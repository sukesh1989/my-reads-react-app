import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelve from './BookShelve'
import * as BooksAPI from './BooksAPI'
class Search extends Component {

state = {
    query:'',
    books:[]
}

  componentWillReceiveProps() {
   console.log(this.state.query)
    
  }

 searchBooks = (query) => {

   BooksAPI.search(query,20).then((searchResults)=>{
       const booksInLibrary = this.props.books.map(b => b.id)
        searchResults.forEach(book => {
        booksInLibrary.includes(book.id) && (
        book.shelf = this.props.books.filter(b => b.id === book.id)[0].shelf
      )
    })
    this.setState({books: searchResults})
        
         
        })
  }
 



    render() {

       


return (
    <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
               
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={(event)=> this.searchBooks(event.target.value)} placeholder="Search by title or author"/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  
                 <BookShelve books={this.state.books} onChangeShelf={this.props.onChangeShelf} shelveType=""/>
              </ol>
            </div>
          </div>

)

    }


}


export default Search;