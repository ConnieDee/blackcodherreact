import React, { useState } from 'react';
import { BrowserRouter, BrowserRouter as Route } from 'react-router-dom';
import Booklist from './components/BookList';
import Book from './components/Books';
import Header from './components/Header';
import data from './models/books.json';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');

  async function findBooks(value) {
    const results = await
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
    pe=books&projection=lite`).then(res => res.json());
    if (!results.error) {
    setBooks(results.items);
    }
  }

  setBooks('This many books');

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
    const newBooks = books.filter(book => {
      if (title === book.volumeInfo.title) {
        return false;
      }
      return true;
    });
    setBooks(newBooks)
  }

  if (Book.length === 0) {
    return 'No books found';
  }
  //return (
  //  <div>
  //    <Booklist books={books} addBook={addBook}/>
  //  </div>
  return (
    <BrowserRouter>
    <Route path="/" render={() => (
      <React.Fragment>
        <Header/>
        <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
        <Booklist books={books} addBook={addBook}/>
      </React.Fragment>
    )}></Route>

    <Route path="/about" render={() => (
      <React.Fragment>
        <About/>
        <Booklist books={books} addBook={addBook}/>
      </React.Fragment>
    )}></Route>

    <Route path="/bookcase" render={() => (
      <React.Fragment>
        <Header/>
        <Booklist books={books} addBook={addBook}/>
      </React.Fragment>
    )}></Route>
    </BrowserRouter>
    
  );
}
export default App;
