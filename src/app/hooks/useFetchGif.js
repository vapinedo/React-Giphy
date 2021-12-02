import { useEffect, useState } from "react";
import { getGifs } from "@helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(images => {
                setState({
                    data: images,
                    isLoading: false 
                });
            });
    }, [category]);

    return state;
};