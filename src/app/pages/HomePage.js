import React, { useState } from 'react'
import { Search } from '@components/Search';
import { GifList } from '@components/GifList';

export const HomePage = () => {

    const [category, setCategory] = useState("");

    return (
        <div className="container-lg main-wrapper">
            <header>
                <h1>Giphy App</h1>
            </header>

            <Search setCategory={ setCategory } />
            <GifList key={ category } category={ category } />
        </div>
    )
}
