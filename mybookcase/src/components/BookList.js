import React, { useState } from 'react';
import Book from './Books';
import Pagination from './Pagination';



const BookList = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);

const paginate = pageNumber => setCurrentPage(pageNumber);

return (
    <div>
        {currentBooks.map((book) => (
            <React.Fragment>
                <Book key={book.id} book={book} currentBooks={currentBooks} addBook={props.addBook} removeBook={props.removeBook} showDeleteButton={props.showDeleteButton} />
                
                <Pagination booksPerPage={booksPerPage} totalBooks={props.books.length} paginate={paginate} />
            </React.Fragment>
        ))}
    </div>
)

//    return (
  //      <div>
    //        {props.books.map(book => <Book key={book.id} book={book}/>)}
      //  </div>
    //);
};

export default BookList;