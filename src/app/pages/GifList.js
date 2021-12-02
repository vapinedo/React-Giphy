import React, { useState } from 'react'
import { Search } from '@components/Search';
import { GifItem } from '@components/GifItem';

export const GifList = () => {

    const [category, setCategory] = useState("Dragon Ball Z");

    return (
        <>
            <Search setCategory={ setCategory } />

            <GifItem  
                key={ category } 
                category={ category } />
        </>
    )
}
