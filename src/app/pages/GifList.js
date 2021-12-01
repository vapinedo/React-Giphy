import React, { useState } from 'react'
import { CategorySearch } from '@components/CategorySearch';
import "./GifList.css"

export const GifList = () => {

    const categoryList = [
        "Samurai X",
        "One Punch Man",
        "Dragon Ball Z",
        "Hunter x Hunter"
    ];

    const [categories, setCategories] = useState(categoryList);

    const addCategory = (category) => {
        setCategories([...categories, category])
    };

    return (
        <div>
            <CategorySearch addCategory={ addCategory } />
            <ul>
                {
                    categories.map(cat => {
                        return <li key={cat}>{ cat }</li>
                    })
                }
            </ul>
        </div>
    )
}
