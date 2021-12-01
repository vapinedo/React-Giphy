import React, { useState, useEffect } from 'react'
import { GifCard } from '@components/GifCard';

export const GifItem = ({ category }) => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGifs();
    }, []);
    
    const getGifs = async() => {
        const searchEndPoint = "gifs/search";
        const baseUrl = "https://api.giphy.com/v1/";
        const apiKey = "KMuvgZhmZXBQ8wLRPBeZPcVDCwSJPfcc";
        const url = `${baseUrl}${searchEndPoint}?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;

        const request = await fetch(url);
        const { data } = await request.json();

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        });
        setImages(gifs);
    };

    return (
        <section className="row g-4">
            <h3>{ category }</h3>

            {images.map(img => (
                <GifCard key={ img.id } { ...img } />
            ))}
        </section>
    )
}
