import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
 //const info = props.book.volumeInfo;

 const { volumeInfo: { title, authors, description, imageLinks: { thumbnail } } } = props.book 
  
const renderAmount = () => {
  if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
    return '£' + props.book.saleInfo.listPrice.amount;
    }
  return 'no price available';
}

//function addBook(title) {
//  console.log(`The book ${title} was clicked`);
//}
  
const renderAuthors = () => {
    if (authors.length === 1) {
      return authors;
      }
    return authors.map(author => author + ', ');
    }
  
    return (
      <div>
        <img src={thumbnail} alt=""/>
        <h2>{title}</h2>
        <h3>{renderAuthors()}</h3>
        <p>{renderAmount()}</p>
        <p>{description}</p>
        <button onClick={() => props.addBook(title)}>+Add</button>
        <button onClick={() => props.removeBook(title)}>-Remove</button>
      </div>
      );
};

Book.propTypes = {
    volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
    authors: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageLinks: PropTypes.shape({thumbnail: PropTypes.string.isRequired})
};

Book.defaultProps = {
    title: 'No Title Available',
    authors: 'No Author Available',
    description: 'No Description Available',
    Price: 'No Price Available',
    imageLinks: 'Sorry No Iamge Found'
}

export default Book;