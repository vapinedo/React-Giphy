import React from "react";
import { shallow } from "enzyme";
import { Search } from "../../components/Search";

describe("Unit testing for <Search /> component", () => {

    const setCategory = jest.fn();
    let wrapper = shallow(<Search setCategory={setCategory} />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<Search setCategory={setCategory} />);
    });

    test("Should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Should call onSearch method when changes input value", () => {
        const input = wrapper.find("input");
        const value = "Hello world";
        input.simulate("change", { target: value });
    });

    test("Should not invoke onSearch method when input is empty", () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} });
        expect(setCategory).not.toHaveBeenCalled();
    });
});