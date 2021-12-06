import { getGifs } from "../../helpers/getGifs";

describe("Unit testing for getGif helper file", () => {

    test("Should return 10 gifs images", async() => {
        const gifCategory = "Naruto";
        const gifs = await getGifs(gifCategory);
        expect(gifs.length).toBe(10);
    });

    test("Should return empy array, when getGif is invoke without paremter", async () => {
        const gifs = await getGifs(""); 
        expect(gifs.length).toBe(0);
    });
});