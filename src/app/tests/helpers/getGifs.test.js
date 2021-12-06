import { getGifs } from "../../helpers/getGifs";

describe("Unit testing for getGif helper file", () => {

    test("Should return 10 gifs images", async() => {
        const gifCategory = "Naruto";
        const gifs = await getGifs(gifCategory);
        expect(gifs.length).toBe(10);
    });
});