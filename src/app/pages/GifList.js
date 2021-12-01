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

    return (
        <div>
            <CategorySearch setCategories={ setCategories } />
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
