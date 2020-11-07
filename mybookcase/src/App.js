import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Booklist from './components/BookList';
import Book from './components/Books';
import Header from './components/Header';
import Search from './components/Search';
import data from './models/books.json';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  const [bookcase, setBookcase] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title=`${count} Book(s) Added to Bookcase`;
  });

  async function findBooks(value) {
    const results = await
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
    pe=books&projection=lite`).then(res => res.json());
    if (!results.error) {
    setBooks(results.items);
    }
  }

const addBook = (title, id) => {
  const newBooks = books.filter(book => book.id !==id);
  const pickedBooks = books.filter(book => book.id ===id);
  setBooks(newBooks);
  setBookcase([...bookcase, ...pickedBooks]);
  setCount(count +1);
  console.log(`The book ${title} was clicked`)
}

function removeBook (id) {
  const newBooks = bookcase.filter(book => book.id !==id);
  setBookcase(newBooks);
  setCount(count -1);
}

 // setBooks('This many books');

 // function addBook(title, id) {
 //   console.log(`The Book ${title} was clicked`);
//    const newBooks = books.filter(book => {
//      if (title === book.volumeInfo.title) {
//        return false;
//      }
//      return true;
//    });
//    setBooks(newBooks)
//  }

//  if (Book.length === 0) {
//    return 'No books found';
//  }
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
