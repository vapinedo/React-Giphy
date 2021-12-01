import React from 'react'

export const GifItem = ({ category }) => {

    const searchEndPoint = "gifs/search";
    const baseUrl = "https://api.giphy.com/v1/";
    const apiKey = "KMuvgZhmZXBQ8wLRPBeZPcVDCwSJPfcc";

    const getGif = async(category) => {
        const request = await fetch(`
            ${baseUrl}${searchEndPoint}?q=${category}&limit=10&api_key=${apiKey}`
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
    };

    getGif();

    return (
        <div>
            <p>{ category }</p>
        </div>
    )
}
