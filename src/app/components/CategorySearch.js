import React, { useState } from 'react'

export const CategorySearch = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const onSearching = (e) => {
        const query = e.target.value;
        setInputValue(query);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setCategories(prevCategories => [inputValue, ...prevCategories]);
    };

    return (
        <form onSubmit={ onSubmit } className="my-4">
            <input 
                type="text" 
                value={ inputValue }
                className="form-control" 
                onChange={ onSearching }
                placeholder="Search gif ..." />
        </form>
    )
}
