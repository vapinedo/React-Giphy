import React, { useState } from 'react'
import PropTypes from "prop-types";

export const Search = ({ setCategory }) => {

    const [queryString, setQueryString] = useState("");

    const onSearch = (e) => {
        const query = e.target.value;
        setQueryString(query);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (queryString.trim().length < 2) return;
        setCategory(queryString);
        setQueryString("");
    };

    return (
        <section className="row">
            <form onSubmit={ onSubmit } className="col-md-12 my-4">
                <input 
                    type="text" 
                    value={ queryString }
                    onChange={ onSearch }
                    placeholder="Search gif ..."
                    className="form-control animate__animated animate__fadeIn" />
            </form>
        </section>
    )
}

Search.propTypes = {
    setCategory: PropTypes.func.isRequired
};  