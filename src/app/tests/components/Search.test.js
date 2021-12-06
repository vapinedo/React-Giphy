import React from "react";
import { shallow } from "enzyme";
import { Search } from "../../components/Search";

describe("Unit testing for <Search /> component", () => {

    const setCategory = () => {};

    test("Should render correctly", () => {
        const wrapper = shallow(<Search setCategory={setCategory} />);
        expect(wrapper).toMatchSnapshot();
    });
});