import React from 'react'
import { useFetchGifs } from '@hooks/useFetchGif'
import { GifCard } from '@components/GifCard';

export const GifItem = ({ category }) => {

    const { data:images, isLoading } = useFetchGifs(category);

    return (
        <section className="row g-4">
            <h3>{ category }</h3>

            { isLoading && <p>Loading...</p> }

            {images.map(img => (
                <GifCard key={ img.id } { ...img } />
            ))}
        </section>
    )
}
