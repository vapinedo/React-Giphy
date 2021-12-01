import React, { useState } from 'react'
import { CategorySearch } from '@components/CategorySearch';
import { GifItem } from '@components/GifItem';
import "./GifList.css"

export const GifList = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <CategorySearch setCategories={ setCategories } />
            <GifItem categories={ categories } />
        </>
    )
}
