
export const getGifs = async(category) => {

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

    return gifs;
};