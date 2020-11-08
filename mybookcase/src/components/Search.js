import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Search = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword);
    }


return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchKeyword">
            <Form.Control type="keyword" placeholder="Search by Author, Title or Theme" value={props.keyword}
            onChange={(e) => {props.setKeyword(e.target.value)}}/>
        </Form.Group>
        <button type="button" class="btn btn-light">Submit</button>
    </Form>
)
}
export default Search;