import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe("Testing Notifications", () => {
    const wrapper = shallow(<Notifications />);

    it("should render Notifications without crashing", () => {
        shallow(<Notifications />);
    });
    it("should render 3 list items", () => {
        expect(wrapper.find('li').children().length).toEqual(3);
    });
    it("should renders the text: Here is the list of notifications", () => {
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toequal(true);
    });
})