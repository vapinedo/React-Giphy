import React, { useState } from 'react'

export const CategoryAdd = () => {

    const [inputValue, setInputValue] = useState("Hello world");

    const handelInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    };

    return (
        <form onSubmit={ handleSubmit } className="my-4">
            <input 
                type="text" 
                value={ inputValue }
                className="form-control" 
                onChange={ handelInputChange }
                placeholder="Search gif..." />
        </form>
    )
}
