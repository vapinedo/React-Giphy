import React, { useState } from 'react'
import { CategoryAdd } from '@components/CategoryAdd';
import "./GifList.css"

export const GifList = () => {

    const categoryList = [
        "Samurai X",
        "One Punch Man",
        "Dragon Ball Z",
        "Hunter x Hunter"
    ];

    const [categories, setCategories] = useState(categoryList);

    const addCategory = () => {
        setCategories([...categories, "New category"])
    };

    return (
        <div>
            <h3>GifList works!</h3>
            <CategoryAdd />

            <ul>
                {
                    categories.map(cat => {
                        return <li key={cat}>{ cat }</li>
                    })
                }
            </ul>

            <button onClick={ addCategory }
                className="btn btn-outline-primary">Add Category</button>
        </div>
    )
}
