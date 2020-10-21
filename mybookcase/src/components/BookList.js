import React from 'react';
import Book from './Books';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => <Book key={book.id} book={book}/>)}
        </div>
    );
}

export default BookList;