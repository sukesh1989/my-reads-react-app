import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookShelveList from './BookShelveList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component { 
   state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  books : [],
  searchResults: []
  }

  
  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
    })
    
  }

  changeShelf = (book,shelf) => {
      const tempBook=book
      if(shelf.target.value!=="none"){
      var newBooksArray =this.state.books.filter((b)=>b.id!==book.id)
      tempBook.shelf=shelf.target.value
      newBooksArray.push(tempBook)
      this.setState({books:newBooksArray
        
      })
      BooksAPI.update(book,shelf.target.value)
      }
     
  }

  render() {
    return (
      <div className="app">
    
    <Route path="/search" render={ ({})=> (
       
      <Search 
      books={this.state.books} 
      onChangeShelf={this.changeShelf}
       />
    )
    }
/>

      <Route path="/" exact render={ () => (
       <BookShelveList books={this.state.books} onChangeShelf={this.changeShelf} />
      )}/>

      </div>
    )
  }
}

export default BooksApp
