import React from 'react';

const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword);
    }


return (
    <form onSubmit={handleSubmit}>
        <h1>{props.keyword && 'Search by term: ' + props.keyword}</h1>
        <input 
            type="text"
            value={props.keyword}
            onChange={(e) => {props.setKeyword(e.target.value)}}/>
        <input type="submit"/>
    </form>
)
}
export default Search;