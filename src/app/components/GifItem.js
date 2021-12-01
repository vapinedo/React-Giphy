import React, { useState, useEffect } from 'react'
import { GifCard } from '@components/GifCard';

export const GifItem = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGif();
    }, [])

    const searchEndPoint = "gifs/search";
    const baseUrl = "https://api.giphy.com/v1/";
    const apiKey = "KMuvgZhmZXBQ8wLRPBeZPcVDCwSJPfcc";

    const getGif = async(category) => {
        const request = await fetch(`
            ${baseUrl}${searchEndPoint}?q=Rick+and+Morty&limit=10&api_key=${apiKey}`
        );
        const { data } = await request.json();
        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        });
        console.log(gifs);
        setImages(gifs);
    };

    return (
        <section className="row g-4">
            {images.map(img => (
                <GifCard key={ img.id } { ...img } />
            ))}
        </section>
    )
}
