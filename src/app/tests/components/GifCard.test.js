import React from "react";
import { shallow } from "enzyme";
import { GifCard } from '../../components/GifCard';

describe("Test for <GifCard.js />", () => {

    const title = "A title";
    const url = "https://victorpinedo.com/profile.png";
    const wrapper = shallow(<GifCard title={title} url={url} />);

    test("Should render component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Should container a <p> tag with title inside", () => {
        const h5Tag = wrapper.find("h5");
        expect(h5Tag.text().trim()).toBe(title);
    });

    test("Should contain a <img> tag and same url props for alt attribute img", () => {
        const img = wrapper.find("img");
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });
});