import React, { useState } from 'react'
import PropTypes from "prop-types";

export const Search = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onSearching = (e) => {
        const query = e.target.value;
        setInputValue(query);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 2) return;
        setCategory(inputValue);
        setInputValue("");
    };

    return (
        <section className="row">
            <form onSubmit={ onSubmit } className="col-md-12 my-4">
                <input 
                    type="text" 
                    value={ inputValue }
                    className="form-control" 
                    onChange={ onSearching }
                    placeholder="Search gif ..." />
            </form>
        </section>
    )
}

Search.propTypes = {
    setCategory: PropTypes.func.isRequired
};  