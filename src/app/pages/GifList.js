import React, { useState } from 'react'
import "./GifList.css"

export const GifList = () => {

    const gifCategoryList = [
        "Samurai X",
        "One Punch Man",
        "Dragon Ball Z",
        "Hunter x Hunter"
    ];

    const [gifCategory, setGifCategory] = useState(gifCategoryList);

    const addGifCategory = () => {
        setGifCategory([...gifCategory, "New category"])
    };

    return (
        <div>
            <h3>GifList works!</h3>

            <ul>
                {
                    gifCategory.map(cat => {
                        return <li key={cat}>{ cat }</li>
                    })
                }
            </ul>

            <button onClick={ addGifCategory }
                className="btn btn-outline-primary">Add Category</button>
        </div>
    )
}
