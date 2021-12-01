import React, { useState } from 'react'
import { CategorySearch } from '@components/CategorySearch';
import { GifItem } from '@components/GifItem';
import "./GifList.css"

export const GifList = () => {

    const categoryList = ["Dragon Ball Z"];

    const [categories, setCategories] = useState(categoryList);

    return (
        <div>
            <CategorySearch setCategories={ setCategories } />
            <ul>
                {
                    categories.map(category => (
                        <GifItem key={ category } category={ category } />
                    ))
                }
            </ul>
        </div>
    )
}
